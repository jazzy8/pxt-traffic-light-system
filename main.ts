radio.onReceivedString(function (receivedString) {
    if (receivedString == "opticomfl" + trafficid) {
        opticom = 1
    } else if (receivedString == "opticomsl" + trafficid) {
        opticom = 2
    }
})
// Set the radio group and the traffic id. If you're only setting up one light, don't worry about the traffic id. If you're setting up multiple though, make sure each light is on the same group but has a different traffic id.
let crosscounter = 0
let opticom = 0
let trafficid = 0
radio.setGroup(37)
trafficid = 0
opticom = 0
basic.forever(function () {
    if (opticom == 0) {
        if (opticom == 0) {
            radio.sendString("flgreen" + trafficid)
        }
        if (opticom == 0) {
            radio.sendString("slred" + trafficid)
        }
        if (opticom == 0) {
            radio.sendString("flcrosswhite" + trafficid)
        }
        if (opticom == 0) {
            radio.sendString("slcrossred" + trafficid)
        }
        if (opticom == 0) {
            for (let index = 0; index < 150; index++) {
                if (opticom == 0) {
                    basic.pause(100)
                }
            }
        }
        if (opticom == 0) {
            crosscounter = 20
            radio.sendString("flcross20" + trafficid)
        }
        if (opticom == 0) {
            for (let index = 0; index < 20; index++) {
                if (opticom == 0) {
                    for (let index = 0; index < 10; index++) {
                        if (opticom == 0) {
                            basic.pause(100)
                        }
                    }
                    crosscounter += -1
                    radio.sendString("flcross" + crosscounter + trafficid)
                }
            }
        }
        if (opticom == 0) {
            radio.sendString("flcrossred" + trafficid)
            radio.sendString("slcross" + trafficid)
        }
    }
})
