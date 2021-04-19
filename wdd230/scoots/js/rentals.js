const requestURL = "data/rentals.json";


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {
        const vehicles = jsonObject["vehicles"];
        vehicles.forEach(vehicle => {
            let card = document.createElement("section");
            let vehicleImage = document.createElement("img");
            let vehicleName = document.createElement("h3");
            let vehicleDes = document.createElement("p");

            vehicleName.textContent = vehicle.rentalType;
            vehicleDes.textContent = vehicle.description;
            vehicleImage.setAttribute("src", vehicle.image);
            vehicleImage.setAttribute("alt", vehicleName.textContent);

            card.appendChild(vehicleImage);
            card.appendChild(vehicleName);
            card.appendChild(vehicleDes);

            document.getElementById("rental-vehicles").appendChild(card);
        });

    });

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {
        const information = jsonObject["information"];
        for (let i = 0; i < information.length; i++) {
            let condition = document.createElement("li");
            condition.textContent = information[i];
            document.getElementById("rental-conditions").appendChild(condition);
        }


    });

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {
        const vehicles = jsonObject["vehicles"];
        //Metro Scooter
        document.getElementById("metro-reshd").textContent = vehicles[0].pricing.reservation.halfDay;
        document.getElementById("metro-resfd").textContent = vehicles[0].pricing.reservation.fullDay;
        document.getElementById("metro-walkhd").textContent = vehicles[0].pricing.walkIn.halfDay;
        document.getElementById("metro-walkfd").textContent = vehicles[0].pricing.walkIn.fullDay;
        //Dio Scooter
        document.getElementById("dio-reshd").textContent = vehicles[1].pricing.reservation.halfDay;
        document.getElementById("dio-resfd").textContent = vehicles[1].pricing.reservation.fullDay;
        document.getElementById("dio-walkhd").textContent = vehicles[1].pricing.walkIn.halfDay;
        document.getElementById("dio-walkfd").textContent = vehicles[1].pricing.walkIn.fullDay;
        //PCX 150 Scooter
        document.getElementById("pcx-reshd").textContent = vehicles[2].pricing.reservation.halfDay;
        document.getElementById("pcx-resfd").textContent = vehicles[2].pricing.reservation.fullDay;
        document.getElementById("pcx-walkhd").textContent = vehicles[2].pricing.walkIn.halfDay;
        document.getElementById("pcx-walkfd").textContent = vehicles[2].pricing.walkIn.fullDay;
        //ATV Pioneer
        document.getElementById("atv-reshd").textContent = vehicles[3].pricing.reservation.halfDay;
        document.getElementById("atv-resfd").textContent = vehicles[3].pricing.reservation.fullDay;
        document.getElementById("atv-walkhd").textContent = vehicles[3].pricing.walkIn.halfDay;
        document.getElementById("atv-walkfd").textContent = vehicles[3].pricing.walkIn.fullDay;
        //Jeep 4 Door
        document.getElementById("jeep4door-reshd").textContent = vehicles[4].pricing.reservation.halfDay;
        document.getElementById("jeep4door-resfd").textContent = vehicles[4].pricing.reservation.fullDay;
        document.getElementById("jeep4door-walkhd").textContent = vehicles[4].pricing.walkIn.halfDay;
        document.getElementById("jeep4door-walkfd").textContent = vehicles[4].pricing.walkIn.fullDay;
        //Jeep 2 Door
        document.getElementById("jeep2door-reshd").textContent = vehicles[5].pricing.reservation.halfDay;
        document.getElementById("jeep2door-resfd").textContent = vehicles[5].pricing.reservation.fullDay;
        document.getElementById("jeep2door-walkhd").textContent = vehicles[5].pricing.walkIn.halfDay;
        document.getElementById("jeep2door-walkfd").textContent = vehicles[5].pricing.walkIn.fullDay;
    });