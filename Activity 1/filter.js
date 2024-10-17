function filter(attraction, age, height) {
    //write your JS code here:

    if (!isNaN(attraction.minAge) && (age < attraction.minAge)) {
        return false;
    }

    if (!isNaN(attraction.maxAge) && (age > attraction.maxAge)) {
        return false;
    }

    if (!isNaN(attraction.minHeight) && (height < attraction.minHeight)) {
        return false;
    }

    if (!isNaN(attraction.maxHeight) && (height > attraction.maxHeight)) {
        return false;
    }

    

    return true;
}

/* 
     {
        name: "The roller coaster",
        description: "Blazing speeds on a winding route through the mysteries of the McChun Mine",
        minimunAge: 12,
        minimunHeight: 130,
        maximunHeight: 210,
    },
*/