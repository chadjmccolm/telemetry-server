/*

Author: Chad McColm
Date: Dec. 7, 2019

C++ Code that looks through a DBC file and processes it into a Javascript object that can react to incoming data

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
  float scalingFactor;
  float offset;
};

// Define a struct to store the loadMessage function parameters
struct loadMessageParameters {
  string message;
  int id;
};

// Main function runs at program start
int main(){

    // Create the file objects
    fstream input;
    fstream output;
    input.open("sample2.dbc",ios::in);
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
                        output << "\t\t" << parameter.signal << " = data & " << parameter.binaryselector << " * " << parameter.scalingFactor << " + " << parameter.offset << "\n";
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
                scalefactor = stof(line.substr(leftparentheses + 1, comma - leftparentheses -1));
                offset = stof(line.substr(comma + 1, rightparentheses - comma -1));
                
                // Print the processing to the command line
                cout << "\t\tName: " << signal << "\tStart Bit: " << startbit << "\tLength: " << length << "\tByte Order: " << Intel << "\tScale Factor: " << scalefactor << "\tOffset: " << offset << "\n";

                // print the selected bits in decimal format
                unsigned long long binaryselector;
                binaryselector = 1 << startbit;
                // If the Endianness is big (Motorola)
                if(Intel){
                    // Make as many digits to the left of the original 1 as needed
                    for(int i = startbit+1; i < startbit + length; i++){
                        binaryselector = binaryselector | (1 << i);
                    }
                }
                // If the Endianness is small (Intel)
                else{
                    // Make as many digits to the right of the original 1 as needed
                    for(int i = startbit-1; i > startbit - length; i--){
                        binaryselector = binaryselector | (1 << i);
                    }
                }

                // Save the parameters needed later to load the binary data
                loadBinaryDataParameters parameter;
                parameter.signal = signal;
                parameter.binaryselector = binaryselector;
                parameter.offset = offset;
                parameter.scalingFactor = scalefactor;
                parameters.push_back(parameter);

                // Print the processing to the JS file
                output << "\t" << signal << ": 0,\n";

            }

        }

        // After reading all the lines of the file, make the vehicle data variable 
        output << "var vehicleState = {" << "\n";
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

        
        output << "console.log(\"DBC file loaded\");\n";

        // Cleanup open files
        input.close();
        output.close();

        return EXIT_SUCCESS;

    }
    else{

        return EXIT_FAILURE;

    }

}