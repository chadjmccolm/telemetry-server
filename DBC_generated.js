function reverseBytes(data, DLC){
    
    // Create a storage place for inverting the order of the bytes
    let bytes = [];
    
    // Loop through the bytes of data and save them into the bytes array in reverse order
    for(var i = 0n; i < DLC; i++){
        // add first 8 bits of the data to the array
        var middle = (data & (255n << 8n*i)) >> 8n*i;
        bytes.unshift(middle);
    }
    
    // Create storage value for the output
    let output = 0n;
    
    // Combine the bytes into the correct order and store in output block
    for(var i = 0n; i < DLC; i++){
        output = output | bytes[i] << 8n*i;
    }
    
    return output;
}

// Takes a number of some bit-length and interprets it as a signed value
function signify(number, bitLength){

    // Get the first bit of number
    firstBit = number >> bitLength - 1;

    // populate out the left side of the number until it becomes 32 bits long
    for (i = bitLength; i < 32; i++){
        number = number | firstBit << i;
    }

    // bitwise or with 0 to make it intepret as signed
    number = number | 0;

    return number;

}

var WeirdMessage = {
	voltage: 0,
	TPS: 0,
	RPM: 0,
	Regen_Status: 0,
	current: 0,
	AMS_Status: 0,
	AFR: 0,
	loadBinaryData : function(data){
		this.voltage = Number(reverseBytes(data & 280375465082880n, 8n) >> 16n) * 0.1 + 0
		this.TPS = Number((data & 136902082560n) >> 29n) * 0.5 + 0
		this.RPM = Number(reverseBytes(data & 18446462598732840960n, 8n) >> 0n) * 1 + 0
		this.Regen_Status = Number((data & 2n) >> 1n) * 1 + 0
		this.current = signify(Number((data & 134215680n) >> 11n), 16) * 1 + 0
		this.AMS_Status = Number((data & 1n) >> 0n) * 1 + 0
		this.AFR = Number((data & 2040n) >> 3n) * 0.1 + 0
	}
}

module.exports = {
	WeirdMessage,
	loadMessage : function(message){
		if (message.ID == 2) WeirdMessage.loadBinaryData(message.data)
	}
}

