document.getElementById('calculateButton').addEventListener('click', function () {
    const totalDays = parseInt(document.getElementById('totalDays').value);
    const roomType = document.getElementById('roomType').value;
    const amenities = Array.from(document.getElementById('amenities').selectedOptions).map(option => option.value);
    const totalPersons = parseInt(document.getElementById('totalPersons').value);
    let roomCost = 0;

    if (roomType === 'Delux Room') {
        roomCost = 2500;
    } else if (roomType === 'Suite Room') {
        roomCost = 4000;
    }

    let amenitiesCost = 0;
    if (amenities.includes('AC')) {
        amenitiesCost += 1000;
    }
    if (amenities.includes('Locker')) {
        amenitiesCost += 300;
    }

    const totalRoomCost = roomCost * totalDays;
    const advanceAmount = parseInt(document.getElementById('advanceAmount').value);
    const totalCost = totalRoomCost + amenitiesCost;

    document.getElementById('totalRoomCost').value = totalRoomCost;
    document.getElementById('balance').value = totalCost - advanceAmount;
    document.getElementById('totalCost').value = totalCost;
    let additionalCost=0;
    let finalCost=0;
    let finalBalance=0;
    if (totalPersons<=2) {
        document.getElementById('additionalCost').value=0;
    }
    else {
        var tp=totalPersons-2;
        additionalCost = tp*totalDays*1000;
        finalCost = additionalCost+totalCost;
        finalBalance = finalCost-advanceAmount;
    }
    document.getElementById('additionalCost').value=additionalCost;
    document.getElementById('finalCost').value = finalCost;
    document.getElementById('finalBalance').value = finalBalance;
});