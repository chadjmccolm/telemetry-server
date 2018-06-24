import paho.mqtt.client as mqtt #import the client
import time

broker_address="localhost"
client = mqtt.Client()
client.connect(broker_address)

i = 0.0
going_down = False

while(True):

	client.publish("hybrid/engine/AFR", 10.0 + i/4.0)
	client.publish("hybrid/engine/TPS", 0 + i * 10.0)
	client.publish("hybrid/engine/temperature", 170.0 + i * 2.0)
	client.publish("hybrid/dash/charge", 0 + i * 10.0)
	client.publish("hybrid/dash/fuel", 100.0 - i * 10.0)
	client.publish("hybrid/dash/GLVoltage", 10.0 + i * 0.4)

	print("data set sent for iteration value: " + str(i) + " sent temp was " + str(170.0 + i * 2.0))

	if(going_down == False):
		i += 0.01
	else:
		i -= 0.01

	if(i >= 10):
		going_down = True
	if(i <= 0):
		going_down = False

	# time chosen to emulate 1000 data points per second with 6 data points every 0.006 seconds (max data being sent)
	time.sleep(0.006)
