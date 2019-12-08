var MS_Info = {
	RPM: 0,
	AFR: 0,
	TPS: 0,
	loadBinaryData : function(data){
		this.RPM = data & 16776960 * 1 + 0
		this.AFR = data & 65280 * 1 + 0
		this.TPS = data & 255 * 1 + 0
	}
}

var AMS_Feedback = {
	Regen_Status: 0,
	AMS_Status: 0,
	current: 0,
	voltage: 0,
	loadBinaryData : function(data){
		this.Regen_Status = data & 2097152 * 1 + 0
		this.AMS_Status = data & 4194304 * 1 + 0
		this.current = data & 130560 * 1 + 0
		this.voltage = data & 255 * 1 + 0
	}
}

module.exports = {
	MS_Info,
	AMS_Feedback,
	loadMessage : function(message){
		if (message.ID == 336) this.MS_Info.loadBinaryData(message.data)
		else if (message.ID == 256) this.AMS_Feedback.loadBinaryData(message.data)
	}
}
