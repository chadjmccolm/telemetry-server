var megasquirt_gp50 = {
	launch_retard: 0,
	launch_timer: 0,
	total_accel: 0,
	map_accel: 0,
	loadBinaryData : function(data){
		launch_retard = data & 16776960 * 0.1 + 0
		launch_timer = data & 18446744073692774655 * 0.001 + 0
		total_accel = data & 16776960 * 0.1 + 0
		map_accel = data & 18446744073692774655 * 0.1 + 0
	}
}

var megasquirt_gp63 = {
	spare63_3: 0,
	spare63_2: 0,
	spare63_1: 0,
	generic_pid_duty2: 0,
	generic_pid_duty1: 0,
	loadBinaryData : function(data){
		spare63_3 = data & 16776960 * 1 + 0
		spare63_2 = data & 18446744073692774655 * 1 + 0
		spare63_1 = data & 16776960 * 1 + 0
		generic_pid_duty2 = data & 65280 * 0.392 + 0
		generic_pid_duty1 = data & 255 * 0.392 + 0
	}
}

var megasquirt_gp62 = {
	gps_course: 0,
	gps_speed: 0,
	gps_altm: 0,
	gps_altk: 0,
	gps_west: 0,
	loadBinaryData : function(data){
		gps_course = data & 16776960 * 0.1 + 0
		gps_speed = data & 18446744073692774655 * 0.1 + 0
		gps_altm = data & 16776960 * 1 + 0
		gps_altk = data & 65280 * 1 + 0
		gps_west = data & 1 * 1 + 0
	}
}

var megasquirt_gp61 = {
	gps_lonmmin: 0,
	gps_lonmin: 0,
	gps_londeg: 0,
	gps_latmmin: 0,
	gps_latmin: 0,
	gps_latdeg: 0,
	loadBinaryData : function(data){
		gps_lonmmin = data & 16776960 * 1 + 0
		gps_lonmin = data & 65280 * 1 + 0
		gps_londeg = data & 255 * 1 + 0
		gps_latmmin = data & 16776960 * 1 + 0
		gps_latmin = data & 65280 * 1 + 0
		gps_latdeg = data & 255 * 1 + 0
	}
}

var megasquirt_gp60 = {
	cel_status2: 0,
	vsslaunch_retard: 0,
	step3_timing: 0,
	launch_timing: 0,
	loadBinaryData : function(data){
		cel_status2 = data & 16776960 * 1 + 0
		vsslaunch_retard = data & 18446744073692774655 * 0.1 + 0
		step3_timing = data & 16776960 * 0.1 + 0
		launch_timing = data & 18446744073692774655 * 0.1 + 0
	}
}

var megasquirt_gp59 = {
	deadtime1: 0,
	ext_advance: 0,
	als_timing: 0,
	revlim_retard: 0,
	loadBinaryData : function(data){
		deadtime1 = data & 16776960 * 0.001 + 0
		ext_advance = data & 18446744073692774655 * 0.1 + 0
		als_timing = data & 16776960 * 0.1 + 0
		revlim_retard = data & 18446744073692774655 * 0.1 + 0
	}
}

var megasquirt_gp58 = {
	adv4: 0,
	adv3: 0,
	adv2: 0,
	adv1: 0,
	loadBinaryData : function(data){
		adv4 = data & 16776960 * 0.1 + 0
		adv3 = data & 18446744073692774655 * 0.1 + 0
		adv2 = data & 16776960 * 0.1 + 0
		adv1 = data & 18446744073692774655 * 0.1 + 0
	}
}

var megasquirt_gp57 = {
	flex_advance: 0,
	mat_retard: 0,
	idle_cor_advance: 0,
	base_advance: 0,
	loadBinaryData : function(data){
		flex_advance = data & 16776960 * 0.1 + 0
		mat_retard = data & 18446744073692774655 * 0.1 + 0
		idle_cor_advance = data & 16776960 * 0.1 + 0
		base_advance = data & 18446744073692774655 * 0.1 + 0
	}
}

var megasquirt_gp56 = {
	als_addfuel: 0,
	fc_retard: 0,
	cel_retard: 0,
	tc_retard: 0,
	loadBinaryData : function(data){
		als_addfuel = data & 16776960 * 0.001 + 0
		fc_retard = data & 18446744073692774655 * 0.1 + 0
		cel_retard = data & 16776960 * 0.1 + 0
		tc_retard = data & 18446744073692774655 * 0.1 + 0
	}
}

var megasquirt_gp55 = {
	sp1: 0,
	ltt_cor: 0,
	fuelpress_cor: 0,
	fueltemp_cor: 0,
	looptime: 0,
	loadBinaryData : function(data){
		sp1 = data & 18446744073692774400 * 1 + 0
		ltt_cor = data & 16711680 * 0.1 + 0
		fuelpress_cor = data & 18446744073692774655 * 0.1 + 0
		fueltemp_cor = data & 16776960 * 0.1 + 0
		looptime = data & 18446744073692774655 * 1 + 0
	}
}

var megasquirt_gp54 = {
	cel_status: 0,
	alt_targv: 0,
	load_duty: 0,
	alt_duty: 0,
	fp_duty: 0,
	batt_cur: 0,
	loadBinaryData : function(data){
		cel_status = data & 16776960 * 1 + 0
		alt_targv = data & 18446744073692774400 * 0.1 + 0
		load_duty = data & 16711680 * 1 + 0
		alt_duty = data & 65280 * 1 + 0
		fp_duty = data & 255 * 0.392 + 0
		batt_cur = data & 18446744073692774655 * 0.1 + 0
	}
}

var megasquirt_gp53 = {
	fuel_temp2: 0,
	fuel_temp1: 0,
	fuel_press2: 0,
	fuel_press1: 0,
	loadBinaryData : function(data){
		fuel_temp2 = data & 16776960 * 0.1 + 0
		fuel_temp1 = data & 18446744073692774655 * 0.1 + 0
		fuel_press2 = data & 16776960 * 0.1 + 0
		fuel_press1 = data & 18446744073692774655 * 0.1 + 0
	}
}

var megasquirt_gp52 = {
	fuelcons: 0,
	fuelflow: 0,
	knk_rtd: 0,
	canout: 0,
	canin2: 0,
	canin1: 0,
	loadBinaryData : function(data){
		fuelcons = data & 16776960 * 1 + 0
		fuelflow = data & 18446744073692774655 * 1 + 0
		knk_rtd = data & 18446744073692774400 * 0.1 + 0
		canout = data & 16711680 * 1 + 0
		canin2 = data & 65280 * 1 + 0
		canin1 = data & 255 * 1 + 0
	}
}

var megasquirt_gp51 = {
	cel_errorcode: 0,
	portt: 0,
	portp: 0,
	portmj: 0,
	portk: 0,
	porteh: 0,
	portb: 0,
	porta: 0,
	loadBinaryData : function(data){
		cel_errorcode = data & 18446744073692774400 * 1 + 0
		portt = data & 16711680 * 1 + 0
		portp = data & 65280 * 1 + 0
		portmj = data & 255 * 1 + 0
		portk = data & 18446744073692774400 * 1 + 0
		porteh = data & 16711680 * 1 + 0
		portb = data & 65280 * 1 + 0
		porta = data & 255 * 1 + 0
	}
}

var megasquirt_gp49 = {
	knock_cyl16: 0,
	knock_cyl15: 0,
	knock_cyl14: 0,
	knock_cyl13: 0,
	knock_cyl12: 0,
	knock_cyl11: 0,
	knock_cyl10: 0,
	knock_cyl9: 0,
	loadBinaryData : function(data){
		knock_cyl16 = data & 18446744073692774400 * 0.4 + 0
		knock_cyl15 = data & 16711680 * 0.4 + 0
		knock_cyl14 = data & 65280 * 0.4 + 0
		knock_cyl13 = data & 255 * 0.4 + 0
		knock_cyl12 = data & 18446744073692774400 * 0.4 + 0
		knock_cyl11 = data & 16711680 * 0.4 + 0
		knock_cyl10 = data & 65280 * 0.4 + 0
		knock_cyl9 = data & 255 * 0.4 + 0
	}
}

var megasquirt_gp48 = {
	knock_cyl8: 0,
	knock_cyl7: 0,
	knock_cyl6: 0,
	knock_cyl5: 0,
	knock_cyl4: 0,
	knock_cyl3: 0,
	knock_cyl2: 0,
	knock_cyl1: 0,
	loadBinaryData : function(data){
		knock_cyl8 = data & 18446744073692774400 * 0.4 + 0
		knock_cyl7 = data & 16711680 * 0.4 + 0
		knock_cyl6 = data & 65280 * 0.4 + 0
		knock_cyl5 = data & 255 * 0.4 + 0
		knock_cyl4 = data & 18446744073692774400 * 0.4 + 0
		knock_cyl3 = data & 16711680 * 0.4 + 0
		knock_cyl2 = data & 65280 * 0.4 + 0
		knock_cyl1 = data & 255 * 0.4 + 0
	}
}

var megasquirt_gp47 = {
	SS2: 0,
	SS1: 0,
	tps_accel: 0,
	fuel_pct: 0,
	loadBinaryData : function(data){
		SS2 = data & 16776960 * 10 + 0
		SS1 = data & 18446744073692774655 * 10 + 0
		tps_accel = data & 16776960 * 0.1 + 0
		fuel_pct = data & 18446744073692774655 * 0.1 + 0
	}
}

var megasquirt_gp46 = {
	inj_timing_sec: 0,
	inj_timing_pri: 0,
	vvt_duty4: 0,
	vvt_duty3: 0,
	vvt_duty2: 0,
	vvt_duty1: 0,
	loadBinaryData : function(data){
		inj_timing_sec = data & 16776960 * 0.1 + 0
		inj_timing_pri = data & 18446744073692774655 * 0.1 + 0
		vvt_duty4 = data & 18446744073692774400 * 0.392 + 0
		vvt_duty3 = data & 16711680 * 0.392 + 0
		vvt_duty2 = data & 65280 * 0.392 + 0
		vvt_duty1 = data & 255 * 0.392 + 0
	}
}

var megasquirt_gp45 = {
	vvt_target4: 0,
	vvt_target3: 0,
	vvt_target2: 0,
	vvt_target1: 0,
	loadBinaryData : function(data){
		vvt_target4 = data & 16776960 * 1 + 0
		vvt_target3 = data & 18446744073692774655 * 1 + 0
		vvt_target2 = data & 16776960 * 1 + 0
		vvt_target1 = data & 18446744073692774655 * 1 + 0
	}
}

var megasquirt_gp44 = {
	vvt_ang4: 0,
	vvt_ang3: 0,
	vvt_ang2: 0,
	vvt_ang1: 0,
	loadBinaryData : function(data){
		vvt_ang4 = data & 16776960 * 1 + 0
		vvt_ang3 = data & 18446744073692774655 * 1 + 0
		vvt_ang2 = data & 16776960 * 1 + 0
		vvt_ang1 = data & 18446744073692774655 * 1 + 0
	}
}

var megasquirt_gp43 = {
	timing_err: 0,
	sd_status: 0,
	sd_phase: 0,
	sd_error: 0,
	sd_filenum: 0,
	syncreason: 0,
	synccnt: 0,
	loadBinaryData : function(data){
		timing_err = data & 18446744073692774400 * 1 + 0
		sd_status = data & 16711680 * 1 + 0
		sd_phase = data & 65280 * 1 + 0
		sd_error = data & 255 * 1 + 0
		sd_filenum = data & 16776960 * 1 + 0
		syncreason = data & 65280 * 1 + 0
		synccnt = data & 255 * 1 + 0
	}
}

var megasquirt_gp42 = {
	VSS4: 0,
	VSS3: 0,
	VSS2: 0,
	VSS1: 0,
	loadBinaryData : function(data){
		VSS4 = data & 16776960 * 0.1 + 0
		VSS3 = data & 18446744073692774655 * 0.1 + 0
		VSS2 = data & 16776960 * 0.1 + 0
		VSS1 = data & 18446744073692774655 * 0.1 + 0
	}
}

var megasquirt_gp39 = {
	EGOcor8: 0,
	EGOcor7: 0,
	EGOcor6: 0,
	EGOcor5: 0,
	loadBinaryData : function(data){
		EGOcor8 = data & 16776960 * 0.1 + 0
		EGOcor7 = data & 18446744073692774655 * 0.1 + 0
		EGOcor6 = data & 16776960 * 0.1 + 0
		EGOcor5 = data & 18446744073692774655 * 0.1 + 0
	}
}

var megasquirt_gp41 = {
	EGOcor16: 0,
	EGOcor15: 0,
	EGOcor14: 0,
	EGOcor13: 0,
	loadBinaryData : function(data){
		EGOcor16 = data & 16776960 * 0.1 + 0
		EGOcor15 = data & 18446744073692774655 * 0.1 + 0
		EGOcor14 = data & 16776960 * 0.1 + 0
		EGOcor13 = data & 18446744073692774655 * 0.1 + 0
	}
}

var megasquirt_gp40 = {
	EGOcor12: 0,
	EGOcor11: 0,
	EGOcor10: 0,
	EGOcor9: 0,
	loadBinaryData : function(data){
		EGOcor12 = data & 16776960 * 0.1 + 0
		EGOcor11 = data & 18446744073692774655 * 0.1 + 0
		EGOcor10 = data & 16776960 * 0.1 + 0
		EGOcor9 = data & 18446744073692774655 * 0.1 + 0
	}
}

var megasquirt_gp38 = {
	EGOcor4: 0,
	EGOcor3: 0,
	EGOcor2: 0,
	EGOcor1: 0,
	loadBinaryData : function(data){
		EGOcor4 = data & 16776960 * 0.1 + 0
		EGOcor3 = data & 18446744073692774655 * 0.1 + 0
		EGOcor2 = data & 16776960 * 0.1 + 0
		EGOcor1 = data & 18446744073692774655 * 0.1 + 0
	}
}

var megasquirt_gp37 = {
	EGOv16: 0,
	EGOv15: 0,
	EGOv14: 0,
	EGOv13: 0,
	loadBinaryData : function(data){
		EGOv16 = data & 16776960 * 0.00489 + 0
		EGOv15 = data & 18446744073692774655 * 0.00489 + 0
		EGOv14 = data & 16776960 * 0.00489 + 0
		EGOv13 = data & 18446744073692774655 * 0.00489 + 0
	}
}

var megasquirt_gp36 = {
	EGOv12: 0,
	EGOv11: 0,
	EGOv10: 0,
	EGOv9: 0,
	loadBinaryData : function(data){
		EGOv12 = data & 16776960 * 0.00489 + 0
		EGOv11 = data & 18446744073692774655 * 0.00489 + 0
		EGOv10 = data & 16776960 * 0.00489 + 0
		EGOv9 = data & 18446744073692774655 * 0.00489 + 0
	}
}

var megasquirt_gp35 = {
	EGOv8: 0,
	EGOv7: 0,
	EGOv6: 0,
	EGOv5: 0,
	loadBinaryData : function(data){
		EGOv8 = data & 16776960 * 0.00489 + 0
		EGOv7 = data & 18446744073692774655 * 0.00489 + 0
		EGOv6 = data & 16776960 * 0.00489 + 0
		EGOv5 = data & 18446744073692774655 * 0.00489 + 0
	}
}

var megasquirt_gp34 = {
	EGOv4: 0,
	EGOv3: 0,
	EGOv2: 0,
	EGOv1: 0,
	loadBinaryData : function(data){
		EGOv4 = data & 16776960 * 0.00489 + 0
		EGOv3 = data & 18446744073692774655 * 0.00489 + 0
		EGOv2 = data & 16776960 * 0.00489 + 0
		EGOv1 = data & 18446744073692774655 * 0.00489 + 0
	}
}

var megasquirt_gp33 = {
	status8: 0,
	gear: 0,
	duty_pwm6: 0,
	duty_pwm5: 0,
	duty_pwm4: 0,
	duty_pwm3: 0,
	duty_pwm2: 0,
	duty_pwm1: 0,
	loadBinaryData : function(data){
		status8 = data & 18446744073692774400 * 1 + 0
		gear = data & 16711680 * 1 + 0
		duty_pwm6 = data & 65280 * 1 + 0
		duty_pwm5 = data & 255 * 1 + 0
		duty_pwm4 = data & 18446744073692774400 * 1 + 0
		duty_pwm3 = data & 16711680 * 1 + 0
		duty_pwm2 = data & 65280 * 1 + 0
		duty_pwm1 = data & 255 * 1 + 0
	}
}

var megasquirt_gp32 = {
	AFR16: 0,
	AFR15: 0,
	AFR14: 0,
	AFR13: 0,
	AFR12: 0,
	AFR11: 0,
	AFR10: 0,
	AFR9: 0,
	loadBinaryData : function(data){
		AFR16 = data & 18446744073692774400 * 0.1 + 0
		AFR15 = data & 16711680 * 0.1 + 0
		AFR14 = data & 65280 * 0.1 + 0
		AFR13 = data & 255 * 0.1 + 0
		AFR12 = data & 18446744073692774400 * 0.1 + 0
		AFR11 = data & 16711680 * 0.1 + 0
		AFR10 = data & 65280 * 0.1 + 0
		AFR9 = data & 255 * 0.1 + 0
	}
}

var megasquirt_gp31 = {
	AFR8: 0,
	AFR7: 0,
	AFR6: 0,
	AFR5: 0,
	AFR4: 0,
	AFR3: 0,
	AFR2: 0,
	AFR1: 0,
	loadBinaryData : function(data){
		AFR8 = data & 18446744073692774400 * 0.1 + 0
		AFR7 = data & 16711680 * 0.1 + 0
		AFR6 = data & 65280 * 0.1 + 0
		AFR5 = data & 255 * 0.1 + 0
		AFR4 = data & 18446744073692774400 * 0.1 + 0
		AFR3 = data & 16711680 * 0.1 + 0
		AFR2 = data & 65280 * 0.1 + 0
		AFR1 = data & 255 * 0.1 + 0
	}
}

var megasquirt_gp30 = {
	water_duty: 0,
	stream_level: 0,
	accelz: 0,
	accely: 0,
	accelx: 0,
	loadBinaryData : function(data){
		water_duty = data & 18446744073692774400 * 1 + 0
		stream_level = data & 16711680 * 1 + 0
		accelz = data & 18446744073692774655 * 0.001 + 0
		accely = data & 16776960 * 0.001 + 0
		accelx = data & 18446744073692774655 * 0.001 + 0
	}
}

var megasquirt_gp29 = {
	VSS2dot: 0,
	VSS1dot: 0,
	EAEfcor2: 0,
	EAEfcor1: 0,
	loadBinaryData : function(data){
		VSS2dot = data & 16776960 * 0.1 + 0
		VSS1dot = data & 18446744073692774655 * 0.1 + 0
		EAEfcor2 = data & 16776960 * 0.1 + 0
		EAEfcor1 = data & 18446744073692774655 * 0.1 + 0
	}
}

var megasquirt_gp28 = {
	cl_idle_targ_rpm: 0,
	tpsadc: 0,
	eaeload: 0,
	afrload: 0,
	loadBinaryData : function(data){
		cl_idle_targ_rpm = data & 18446744073692774655 * 1 + 0
		tpsadc = data & 16776960 * 1 + 0
		eaeload = data & 18446744073692774655 * 0.1 + 0
		afrload = data & 16776960 * 0.1 + 0
	}
}

var megasquirt_gp27 = {
	canpwmin4: 0,
	canpwmin3: 0,
	canpwmin2: 0,
	canpwmin1: 0,
	loadBinaryData : function(data){
		canpwmin4 = data & 16776960 * 1 + 0
		canpwmin3 = data & 18446744073692774655 * 1 + 0
		canpwmin2 = data & 16776960 * 1 + 0
		canpwmin1 = data & 18446744073692774655 * 1 + 0
	}
}

var megasquirt_gp26 = {
	nitrous_timer_out: 0,
	nitrous2_duty: 0,
	nitrous1_duty: 0,
	n2o_retard: 0,
	n2o_addfuel: 0,
	loadBinaryData : function(data){
		nitrous_timer_out = data & 16776960 * 0.001 + 0
		nitrous2_duty = data & 65280 * 1 + 0
		nitrous1_duty = data & 255 * 1 + 0
		n2o_retard = data & 16776960 * 0.1 + 0
		n2o_addfuel = data & 18446744073692774655 * 0.001 + 0
	}
}

var megasquirt_gp25 = {
	egt16: 0,
	egt15: 0,
	egt14: 0,
	egt13: 0,
	loadBinaryData : function(data){
		egt16 = data & 16776960 * 0.1 + 0
		egt15 = data & 18446744073692774655 * 0.1 + 0
		egt14 = data & 16776960 * 0.1 + 0
		egt13 = data & 18446744073692774655 * 0.1 + 0
	}
}

var megasquirt_gp24 = {
	egt12: 0,
	egt11: 0,
	egt10: 0,
	egt9: 0,
	loadBinaryData : function(data){
		egt12 = data & 16776960 * 0.1 + 0
		egt11 = data & 18446744073692774655 * 0.1 + 0
		egt10 = data & 16776960 * 0.1 + 0
		egt9 = data & 18446744073692774655 * 0.1 + 0
	}
}

var megasquirt_gp23 = {
	egt8: 0,
	egt7: 0,
	egt6: 0,
	egt5: 0,
	loadBinaryData : function(data){
		egt8 = data & 16776960 * 0.1 + 0
		egt7 = data & 18446744073692774655 * 0.1 + 0
		egt6 = data & 16776960 * 0.1 + 0
		egt5 = data & 18446744073692774655 * 0.1 + 0
	}
}

var megasquirt_gp22 = {
	egt4: 0,
	egt3: 0,
	egt2: 0,
	egt1: 0,
	loadBinaryData : function(data){
		egt4 = data & 16776960 * 0.1 + 0
		egt3 = data & 18446744073692774655 * 0.1 + 0
		egt2 = data & 16776960 * 0.1 + 0
		egt1 = data & 18446744073692774655 * 0.1 + 0
	}
}

var megasquirt_gp21 = {
	pwseq16: 0,
	pwseq15: 0,
	pwseq14: 0,
	pwseq13: 0,
	loadBinaryData : function(data){
		pwseq16 = data & 16776960 * 0.001 + 0
		pwseq15 = data & 18446744073692774655 * 0.001 + 0
		pwseq14 = data & 16776960 * 0.001 + 0
		pwseq13 = data & 18446744073692774655 * 0.001 + 0
	}
}

var megasquirt_gp20 = {
	pwseq12: 0,
	pwseq11: 0,
	pwseq10: 0,
	pwseq9: 0,
	loadBinaryData : function(data){
		pwseq12 = data & 16776960 * 0.001 + 0
		pwseq11 = data & 18446744073692774655 * 0.001 + 0
		pwseq10 = data & 16776960 * 0.001 + 0
		pwseq9 = data & 18446744073692774655 * 0.001 + 0
	}
}

var megasquirt_gp19 = {
	pwseq8: 0,
	pwseq7: 0,
	pwseq6: 0,
	pwseq5: 0,
	loadBinaryData : function(data){
		pwseq8 = data & 16776960 * 0.001 + 0
		pwseq7 = data & 18446744073692774655 * 0.001 + 0
		pwseq6 = data & 16776960 * 0.001 + 0
		pwseq5 = data & 18446744073692774655 * 0.001 + 0
	}
}

var megasquirt_gp18 = {
	pwseq4: 0,
	pwseq3: 0,
	pwseq2: 0,
	pwseq1: 0,
	loadBinaryData : function(data){
		pwseq4 = data & 16776960 * 0.001 + 0
		pwseq3 = data & 18446744073692774655 * 0.001 + 0
		pwseq2 = data & 16776960 * 0.001 + 0
		pwseq1 = data & 18446744073692774655 * 0.001 + 0
	}
}

var megasquirt_gp17 = {
	maf_volts: 0,
	boostduty2: 0,
	boostduty: 0,
	boost_targ_2: 0,
	boost_targ_1: 0,
	loadBinaryData : function(data){
		maf_volts = data & 16776960 * 0.001 + 0
		boostduty2 = data & 65280 * 1 + 0
		boostduty = data & 255 * 1 + 0
		boost_targ_2 = data & 16776960 * 0.1 + 0
		boost_targ_1 = data & 18446744073692774655 * 0.1 + 0
	}
}

var megasquirt_gp16 = {
	sensors16: 0,
	sensors15: 0,
	sensors14: 0,
	sensors13: 0,
	loadBinaryData : function(data){
		sensors16 = data & 16776960 * 0.01 + 0
		sensors15 = data & 18446744073692774655 * 0.01 + 0
		sensors14 = data & 16776960 * 0.01 + 0
		sensors13 = data & 18446744073692774655 * 0.01 + 0
	}
}

var megasquirt_gp15 = {
	sensors12: 0,
	sensors11: 0,
	sensors10: 0,
	sensors9: 0,
	loadBinaryData : function(data){
		sensors12 = data & 16776960 * 0.01 + 0
		sensors11 = data & 18446744073692774655 * 0.01 + 0
		sensors10 = data & 16776960 * 0.01 + 0
		sensors9 = data & 18446744073692774655 * 0.01 + 0
	}
}

var megasquirt_gp14 = {
	sensors8: 0,
	sensors7: 0,
	sensors6: 0,
	sensors5: 0,
	loadBinaryData : function(data){
		sensors8 = data & 16776960 * 0.01 + 0
		sensors7 = data & 18446744073692774655 * 0.01 + 0
		sensors6 = data & 16776960 * 0.01 + 0
		sensors5 = data & 18446744073692774655 * 0.01 + 0
	}
}

var megasquirt_gp13 = {
	sensors4: 0,
	sensors3: 0,
	sensors2: 0,
	sensors1: 0,
	loadBinaryData : function(data){
		sensors4 = data & 16776960 * 0.01 + 0
		sensors3 = data & 18446744073692774655 * 0.01 + 0
		sensors2 = data & 16776960 * 0.01 + 0
		sensors1 = data & 18446744073692774655 * 0.01 + 0
	}
}

var megasquirt_gp12 = {
	wallfuel2: 0,
	wallfuel1: 0,
	loadBinaryData : function(data){
		wallfuel2 = data & 18446744073709551615 * 0.01 + 0
		wallfuel1 = data & 18446744073709551615 * 0.01 + 0
	}
}

var megasquirt_gp11 = {
	airtemp: 0,
	ignload2: 0,
	ignload: 0,
	fuelload2: 0,
	loadBinaryData : function(data){
		airtemp = data & 16776960 * 0.1 + 0
		ignload2 = data & 18446744073692774655 * 0.1 + 0
		ignload = data & 16776960 * 0.1 + 0
		fuelload2 = data & 18446744073692774655 * 0.1 + 0
	}
}

var megasquirt_gp10 = {
	status7: 0,
	status6: 0,
	status5: 0,
	status4: 0,
	status3: 0,
	status2: 0,
	status1: 0,
	loadBinaryData : function(data){
		status7 = data & 18446744073692774400 * 1 + 0
		status6 = data & 16711680 * 1 + 0
		status5 = data & 18446744073692774655 * 1 + 0
		status4 = data & 18446744073692774400 * 1 + 0
		status3 = data & 16711680 * 1 + 0
		status2 = data & 65280 * 1 + 0
		status1 = data & 255 * 1 + 0
	}
}

var megasquirt_gp9 = {
	dwell_trl: 0,
	dwell: 0,
	egoV2: 0,
	egoV1: 0,
	loadBinaryData : function(data){
		dwell_trl = data & 16776960 * 0.1 + 0
		dwell = data & 18446744073692774655 * 0.1 + 0
		egoV2 = data & 16776960 * 0.01 + 0
		egoV1 = data & 18446744073692774655 * 0.01 + 0
	}
}

var megasquirt_gp8 = {
	MAF: 0,
	fuelcor: 0,
	fuelload: 0,
	MAFload: 0,
	loadBinaryData : function(data){
		MAF = data & 16776960 * 0.01 + 0
		fuelcor = data & 18446744073692774655 * 0.1 + 0
		fuelload = data & 16776960 * 0.1 + 0
		MAFload = data & 18446744073692774655 * 0.1 + 0
	}
}

var megasquirt_gp7 = {
	RPMdot: 0,
	MAPdot: 0,
	TPSdot: 0,
	cold_adv_deg: 0,
	loadBinaryData : function(data){
		RPMdot = data & 16776960 * 10 + 0
		MAPdot = data & 18446744073692774655 * 1 + 0
		TPSdot = data & 16776960 * 0.1 + 0
		cold_adv_deg = data & 18446744073692774655 * 0.1 + 0
	}
}

var megasquirt_gp6 = {
	iacstep: 0,
	ve2: 0,
	ve1: 0,
	totalcor: 0,
	loadBinaryData : function(data){
		iacstep = data & 16776960 * 1 + 0
		ve2 = data & 18446744073692774655 * 0.1 + 0
		ve1 = data & 16776960 * 0.1 + 0
		totalcor = data & 18446744073692774655 * 0.1 + 0
	}
}

var megasquirt_gp5 = {
	barocor: 0,
	warmcor: 0,
	tpsfuelcut: 0,
	tpsaccel: 0,
	loadBinaryData : function(data){
		barocor = data & 16776960 * 0.1 + 0
		warmcor = data & 18446744073692774655 * 0.1 + 0
		tpsfuelcut = data & 18446744073692774655 * 0.1 + 0
		tpsaccel = data & 16776960 * 0.1 + 0
	}
}

var megasquirt_gp4 = {
	aircor: 0,
	egocor2: 0,
	egocor1: 0,
	knock: 0,
	loadBinaryData : function(data){
		aircor = data & 16776960 * 0.1 + 0
		egocor2 = data & 18446744073692774655 * 0.1 + 0
		egocor1 = data & 16776960 * 0.1 + 0
		knock = data & 18446744073692774655 * 0.1 + 0
	}
}

var megasquirt_gp3 = {
	afr2_old: 0,
	afr1_old: 0,
	batt: 0,
	tps: 0,
	loadBinaryData : function(data){
		afr2_old = data & 16776960 * 0.1 + 0
		afr1_old = data & 18446744073692774655 * 0.1 + 0
		batt = data & 16776960 * 0.1 + 0
		tps = data & 18446744073692774655 * 0.1 + 0
	}
}

var megasquirt_gp2 = {
	clt: 0,
	mat: 0,
	map: 0,
	baro: 0,
	loadBinaryData : function(data){
		clt = data & 16776960 * 0.1 + 0
		mat = data & 18446744073692774655 * 0.1 + 0
		map = data & 16776960 * 0.1 + 0
		baro = data & 18446744073692774655 * 0.1 + 0
	}
}

var megasquirt_gp1 = {
	wbo2_en2: 0,
	wbo2_en1: 0,
	afrtgt2: 0,
	afrtgt1: 0,
	engine: 0,
	squirt: 0,
	adv_deg: 0,
	loadBinaryData : function(data){
		wbo2_en2 = data & 18446744073692774400 * 1 + 0
		wbo2_en1 = data & 16711680 * 1 + 0
		afrtgt2 = data & 65280 * 0.1 + 0
		afrtgt1 = data & 255 * 0.1 + 0
		engine = data & 18446744073692774400 * 1 + 0
		squirt = data & 16711680 * 1 + 0
		adv_deg = data & 18446744073692774655 * 0.1 + 0
	}
}

var megasquirt_gp0 = {
	rpm: 0,
	pw2: 0,
	pw1: 0,
	seconds: 0,
	loadBinaryData : function(data){
		rpm = data & 16776960 * 1 + 0
		pw2 = data & 18446744073692774655 * 0.001 + 0
		pw1 = data & 16776960 * 0.001 + 0
		seconds = data & 18446744073692774655 * 1 + 0
	}
}

var vehicleState = {
	megasquirt_gp50,
	megasquirt_gp63,
	megasquirt_gp62,
	megasquirt_gp61,
	megasquirt_gp60,
	megasquirt_gp59,
	megasquirt_gp58,
	megasquirt_gp57,
	megasquirt_gp56,
	megasquirt_gp55,
	megasquirt_gp54,
	megasquirt_gp53,
	megasquirt_gp52,
	megasquirt_gp51,
	megasquirt_gp49,
	megasquirt_gp48,
	megasquirt_gp47,
	megasquirt_gp46,
	megasquirt_gp45,
	megasquirt_gp44,
	megasquirt_gp43,
	megasquirt_gp42,
	megasquirt_gp39,
	megasquirt_gp41,
	megasquirt_gp40,
	megasquirt_gp38,
	megasquirt_gp37,
	megasquirt_gp36,
	megasquirt_gp35,
	megasquirt_gp34,
	megasquirt_gp33,
	megasquirt_gp32,
	megasquirt_gp31,
	megasquirt_gp30,
	megasquirt_gp29,
	megasquirt_gp28,
	megasquirt_gp27,
	megasquirt_gp26,
	megasquirt_gp25,
	megasquirt_gp24,
	megasquirt_gp23,
	megasquirt_gp22,
	megasquirt_gp21,
	megasquirt_gp20,
	megasquirt_gp19,
	megasquirt_gp18,
	megasquirt_gp17,
	megasquirt_gp16,
	megasquirt_gp15,
	megasquirt_gp14,
	megasquirt_gp13,
	megasquirt_gp12,
	megasquirt_gp11,
	megasquirt_gp10,
	megasquirt_gp9,
	megasquirt_gp8,
	megasquirt_gp7,
	megasquirt_gp6,
	megasquirt_gp5,
	megasquirt_gp4,
	megasquirt_gp3,
	megasquirt_gp2,
	megasquirt_gp1,
	megasquirt_gp0,
	loadMessage : function(message){
		if (message.ID == 1570) megasquirt_gp50.loadBinaryData(message.data)
		else if (message.ID == 1583) megasquirt_gp63.loadBinaryData(message.data)
		else if (message.ID == 1582) megasquirt_gp62.loadBinaryData(message.data)
		else if (message.ID == 1581) megasquirt_gp61.loadBinaryData(message.data)
		else if (message.ID == 1580) megasquirt_gp60.loadBinaryData(message.data)
		else if (message.ID == 1579) megasquirt_gp59.loadBinaryData(message.data)
		else if (message.ID == 1578) megasquirt_gp58.loadBinaryData(message.data)
		else if (message.ID == 1577) megasquirt_gp57.loadBinaryData(message.data)
		else if (message.ID == 1576) megasquirt_gp56.loadBinaryData(message.data)
		else if (message.ID == 1575) megasquirt_gp55.loadBinaryData(message.data)
		else if (message.ID == 1574) megasquirt_gp54.loadBinaryData(message.data)
		else if (message.ID == 1573) megasquirt_gp53.loadBinaryData(message.data)
		else if (message.ID == 1572) megasquirt_gp52.loadBinaryData(message.data)
		else if (message.ID == 1571) megasquirt_gp51.loadBinaryData(message.data)
		else if (message.ID == 1569) megasquirt_gp49.loadBinaryData(message.data)
		else if (message.ID == 1568) megasquirt_gp48.loadBinaryData(message.data)
		else if (message.ID == 1567) megasquirt_gp47.loadBinaryData(message.data)
		else if (message.ID == 1566) megasquirt_gp46.loadBinaryData(message.data)
		else if (message.ID == 1565) megasquirt_gp45.loadBinaryData(message.data)
		else if (message.ID == 1564) megasquirt_gp44.loadBinaryData(message.data)
		else if (message.ID == 1563) megasquirt_gp43.loadBinaryData(message.data)
		else if (message.ID == 1562) megasquirt_gp42.loadBinaryData(message.data)
		else if (message.ID == 1559) megasquirt_gp39.loadBinaryData(message.data)
		else if (message.ID == 1561) megasquirt_gp41.loadBinaryData(message.data)
		else if (message.ID == 1560) megasquirt_gp40.loadBinaryData(message.data)
		else if (message.ID == 1558) megasquirt_gp38.loadBinaryData(message.data)
		else if (message.ID == 1557) megasquirt_gp37.loadBinaryData(message.data)
		else if (message.ID == 1556) megasquirt_gp36.loadBinaryData(message.data)
		else if (message.ID == 1555) megasquirt_gp35.loadBinaryData(message.data)
		else if (message.ID == 1554) megasquirt_gp34.loadBinaryData(message.data)
		else if (message.ID == 1553) megasquirt_gp33.loadBinaryData(message.data)
		else if (message.ID == 1552) megasquirt_gp32.loadBinaryData(message.data)
		else if (message.ID == 1551) megasquirt_gp31.loadBinaryData(message.data)
		else if (message.ID == 1550) megasquirt_gp30.loadBinaryData(message.data)
		else if (message.ID == 1549) megasquirt_gp29.loadBinaryData(message.data)
		else if (message.ID == 1548) megasquirt_gp28.loadBinaryData(message.data)
		else if (message.ID == 1547) megasquirt_gp27.loadBinaryData(message.data)
		else if (message.ID == 1546) megasquirt_gp26.loadBinaryData(message.data)
		else if (message.ID == 1545) megasquirt_gp25.loadBinaryData(message.data)
		else if (message.ID == 1544) megasquirt_gp24.loadBinaryData(message.data)
		else if (message.ID == 1543) megasquirt_gp23.loadBinaryData(message.data)
		else if (message.ID == 1542) megasquirt_gp22.loadBinaryData(message.data)
		else if (message.ID == 1541) megasquirt_gp21.loadBinaryData(message.data)
		else if (message.ID == 1540) megasquirt_gp20.loadBinaryData(message.data)
		else if (message.ID == 1539) megasquirt_gp19.loadBinaryData(message.data)
		else if (message.ID == 1538) megasquirt_gp18.loadBinaryData(message.data)
		else if (message.ID == 1537) megasquirt_gp17.loadBinaryData(message.data)
		else if (message.ID == 1536) megasquirt_gp16.loadBinaryData(message.data)
		else if (message.ID == 1535) megasquirt_gp15.loadBinaryData(message.data)
		else if (message.ID == 1534) megasquirt_gp14.loadBinaryData(message.data)
		else if (message.ID == 1533) megasquirt_gp13.loadBinaryData(message.data)
		else if (message.ID == 1532) megasquirt_gp12.loadBinaryData(message.data)
		else if (message.ID == 1531) megasquirt_gp11.loadBinaryData(message.data)
		else if (message.ID == 1530) megasquirt_gp10.loadBinaryData(message.data)
		else if (message.ID == 1529) megasquirt_gp9.loadBinaryData(message.data)
		else if (message.ID == 1528) megasquirt_gp8.loadBinaryData(message.data)
		else if (message.ID == 1527) megasquirt_gp7.loadBinaryData(message.data)
		else if (message.ID == 1526) megasquirt_gp6.loadBinaryData(message.data)
		else if (message.ID == 1525) megasquirt_gp5.loadBinaryData(message.data)
		else if (message.ID == 1524) megasquirt_gp4.loadBinaryData(message.data)
		else if (message.ID == 1523) megasquirt_gp3.loadBinaryData(message.data)
		else if (message.ID == 1522) megasquirt_gp2.loadBinaryData(message.data)
		else if (message.ID == 1521) megasquirt_gp1.loadBinaryData(message.data)
		else if (message.ID == 1520) megasquirt_gp0.loadBinaryData(message.data)
	}
}

console.log("DBC file loaded");
