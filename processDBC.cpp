/*

Author: Chad McColm
Date: Dec. 7, 2019

C++ Code that looks through a DBC file and processes it into a Javascript object that can react to incoming data


Todo:
 - test

*/

// Include required libraries
#include <iostream>
#include <fstream>
#include <string>
#include <vector>
using namespace std;

// Define a struct to store the loadBinaryData function parameters
struct loadBinaryDataParameters {
  string signal;
  unsigned long long binaryselector;
  int rightShift;
  int isSigned;
  int Intel;
  int length;
  float scalingFactor;
  float offset;
};

// Define a struct to store the loadMessage function parameters
struct loadMessageParameters {
  string message;
  int id;
  int DLC;
};

// Main function runs at program start
int main(){

    // Create the file objects
    fstream input;
    fstream output;
    input.open("sample.dbc",ios::in);
    output.open("DBC_generated.js",ios::out);

    // Variable to track our position within a message
    bool inMessage = 0;
    // Variable to track the messages and ids
    vector<loadMessageParameters> CANmessages;
    // Variable to track whether this message has signals
    bool containsSignals = 0;
    // Variable to track the signal generation function
    vector<loadBinaryDataParameters> parameters;
    
    // Placeholder for lines
    string line;

    // Check if files openned correctly
    if(input.is_open() && output.is_open()) {

        // Print the reverseBytes function for use later
        output << "function reverseBytes(data, DLC){" << "\n";
        output << "    " << "\n";
        output << "    // Create a storage place for inverting the order of the bytes" << "\n";
        output << "    let bytes = [];" << "\n";
        output << "    " << "\n";
        output << "    // Loop through the bytes of data and save them into the bytes array in reverse order" << "\n";
        output << "    for(var i = 0n; i < DLC; i++){" << "\n";
        output << "        // add first 8 bits of the data to the array" << "\n";
        output << "        var middle = (data & (255n << 8n*i)) >> 8n*i;" << "\n";
        output << "        bytes.unshift(middle);" << "\n";
        output << "    }" << "\n";
        output << "    " << "\n";
        output << "    // Create storage value for the output" << "\n";
        output << "    let output = 0n;" << "\n";
        output << "    " << "\n";
        output << "    // Combine the bytes into the correct order and store in output block" << "\n";
        output << "    for(var i = 0n; i < DLC; i++){" << "\n";
        output << "        output = output | bytes[i] << 8n*i;" << "\n";
        output << "    }" << "\n";
        output << "    " << "\n";
        output << "    return output;" << "\n";
        output << "}" << "\n\n";

        // Print the signify function for use later
        output << "// Takes a number of some bit-length and interprets it as a signed value" << "\n";
        output << "function signify(number, bitLength){" << "\n";
        output << "" << "\n";
        output << "    // Get the first bit of number" << "\n";
        output << "    firstBit = number >> bitLength - 1;" << "\n";
        output << "" << "\n";
        output << "    // populate out the left side of the number until it becomes 32 bits long" << "\n";
        output << "    for (i = bitLength; i < 32; i++){" << "\n";
        output << "        number = number | firstBit << i;" << "\n";
        output << "    }" << "\n";
        output << "" << "\n";
        output << "    // bitwise or with 0 to make it intepret as signed" << "\n";
        output << "    number = number | 0;" << "\n";
        output << "" << "\n";
        output << "    return number;" << "\n";
        output << "" << "\n";
        output << "}" << "\n\n";

        while(getline(input, line)){ 

            // Check if this line starts to define a message
            if(line.substr(0,3) == "BO_"){

                // Save that we are in a message
                inMessage = 1;

                // Default containsSignals to 0
                containsSignals = 0;

                // Wipe the parameters array
                parameters.clear();

                // Define outcomes of reading the line
                string message;
                int id;
                int length;

                // Define temporary variables for reading the line
                int firstspace = line.find(" ", 0);
                int secondspace = line.find(" ", firstspace + 1);
                int colon = line.find(" ", secondspace + 1);

                // Use the indexes above to process the outcomes
                id = stoi(line.substr(firstspace+1, secondspace - firstspace - 1));
                message = line.substr(secondspace+1, colon - secondspace - 2);
                length = stoi(line.substr(colon+1, 1));

                // Save the message name and ID to the CANmessages vector
                loadMessageParameters CANmessage;
                CANmessage.id = id;
                CANmessage.DLC = length;
                CANmessage.message = message;
                CANmessages.push_back(CANmessage);

                // Print the processing to the command line
                cout << "Processing Message: " << message << "\n";
                cout << "\tMessage ID: " << id << "\n";
                cout << "\tMessage Length: " << length << "\n";
                cout << "\tSignals: \n";

                // Print the processing to the JS file
                output << "var " << message << " = {" << "\n";
                
            }
            // Check if we have reached the end of a message
            else if (inMessage && line == ""){

                inMessage = 0;
                cout << "--------\n";

                // If this message contains signals now we must allow the mechanism to load them
                if(containsSignals){
                    
                    output << "\tloadBinaryData : function(data){\n";
                    for(loadBinaryDataParameters parameter : parameters){

                        if(parameter.isSigned == 1){
                            output << "\t\tthis." << parameter.signal << " = signify(Number(";
                        }
                        else{
                            output << "\t\tthis." << parameter.signal << " = Number(";
                        }
                        
                        if(parameter.Intel == 1){
                            output << "(data & " << parameter.binaryselector << "n)";
                        }
                        else{
                            output << "reverseBytes(data & " << parameter.binaryselector << "n, " << CANmessages.back().DLC << "n)";
                        }
                        
                        if(parameter.isSigned == 1){
                            output << " >> " << parameter.rightShift << "n)" << ", " << parameter.length << ") * " << parameter.scalingFactor << " + " << parameter.offset << "\n";
                        }
                        else{
                            output << " >> " << parameter.rightShift << "n) * " << parameter.scalingFactor << " + " << parameter.offset << "\n";
                        }
                        
                    }
                    output << "\t}\n";

                }

                output << "}\n\n";

            }
            // Otherwise we are in the middle of a message and are reading signals
            else if (inMessage){
                
                containsSignals = 1;

                // Define outcomes of reading the line
                string signal;
                int startbit;
                int length;
                int Intel;
                int isSigned;
                float scalefactor;
                float offset;

                // Define temporary variables for reading the line
                int secondspace = line.find(" ", 1);
                int colon = line.find(":", secondspace + 1);
                int bar = line.find("|", colon + 1);
                int at = line.find("@", bar + 1);
                int leftparentheses = line.find("(", at + 1);
                int comma = line.find(",", leftparentheses + 1);
                int rightparentheses = line.find(")", comma + 1);

                // Use the indexes above to process the outcomes
                signal = line.substr(secondspace + 1, colon - secondspace - 2);
                startbit = stoi(line.substr(colon + 2, bar - colon - 2));
                length = stoi(line.substr(bar + 1, at - bar - 1));
                Intel = stoi(line.substr(at + 1, 1));
                isSigned = line.substr(at + 2, 1) == "-";
                scalefactor = stof(line.substr(leftparentheses + 1, comma - leftparentheses -1));
                offset = stof(line.substr(comma + 1, rightparentheses - comma -1));
                
                // Print the processing to the command line
                cout << "\t\tName: " << signal << "\tStart Bit: " << startbit << "\tLength: " << length << "\tByte Order: " << Intel << "\tScale Factor: " << scalefactor << "\tOffset: " << offset << "\n";

                // print the selected bits in decimal format
                unsigned long long binaryselector;
                // create an unsigned long long for the selector bit so when it's left shifted it doesn't overflow
                unsigned long long binary = 1;
                binaryselector = binary << startbit;
                int rightShift = 0;

                // If the Endianness is small (Intel)
                if(Intel){

                    // Make as many digits to the left of the original 1 as needed
                    for(int i = startbit+1; i < startbit + length; i++){
                        binaryselector = binaryselector | (binary << i);
                    }

                    // Set the rightshift to the startbit 
                    rightShift = startbit;
                }
                // If the Endianness is big (Motorola)
                else{

                    // Normally you'd just left shift the binary index by i but when you hit the end of a byte you must start populating the next byte in Motorola so we need a separate index that loops around when you hit the end of a byte
                    int index = startbit-1;
                    // Make as many digits to the right of the original 1 as needed
                    for(int i = startbit-1; i > startbit - length; i--){

                        // Select the correct digits
                        binaryselector = binaryselector | (binary << index);

                        // Loop the index around
                        if(i % 8 == 0) index += 16;
                        index--;

                    }
                    
                    if(index > CANmessages.back().DLC * 8){
                        rightShift = 0;
                    }
                    else{
                        rightShift = (index % 8) + 1 + (CANmessages.back().DLC * 8 - index)/8*8;
                    }
                }

                // Save the parameters needed later to load the binary data
                loadBinaryDataParameters parameter;
                parameter.signal = signal;
                parameter.length = length;
                parameter.Intel = Intel;
                parameter.isSigned = isSigned;
                parameter.binaryselector = binaryselector;
                parameter.offset = offset;
                parameter.rightShift = rightShift;
                parameter.scalingFactor = scalefactor;
                parameters.push_back(parameter);

                // Print the processing to the JS file
                output << "\t" << signal << ": 0,\n";

            }

        }

        // After reading all the lines of the file, make the vehicle data variable 
        output << "module.exports = {" << "\n";
        for (loadMessageParameters CANMessage : CANmessages){
            output << "\t" << CANMessage.message << ",\n";
        }
        output << "\tloadMessage : function(message){\n";
        bool first = 1;
        for (loadMessageParameters CANMessage : CANmessages){
            if(first){
                output << "\t\tif (message.ID == " << CANMessage.id << ") " << CANMessage.message << ".loadBinaryData(message.data)\n";
            }
            else{
                output << "\t\telse if (message.ID == " << CANMessage.id << ") " << CANMessage.message << ".loadBinaryData(message.data)\n";
            }
            first = 0;
        }
        output << "\t}\n";
        output << "}\n\n";

        // Cleanup open files
        input.close();
        output.close();

        return EXIT_SUCCESS;

    }
    else{

        return EXIT_FAILURE;

    }

}