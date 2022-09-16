# wod-api

the basic api with the help of express.js and the local db.json file

- this is the api created with the express.js with nodejs for db i use the local db.json as database

 <h2> db.json </h2>

 ```json
 {
    "workouts": [{
            "id": "61dbae02-c147-4e28-863c-db7bd402b2d6",
            "name": "Tommy V",
            "mode": "For Time",
            "equipment": ["barbell", "rope"],
            "exercises": [
                "21 thrusters",
                "12 rope climbs, 15 ft",
                "15 thrusters",
                "9 rope climbs, 15 ft",
                "9 thrusters",
                "6 rope climbs, 15 ft"
            ],
            "createdAt": "4/20/2022, 2:21:56 PM",
            "updatedAt": "4/20/2022, 2:21:56 PM",
            "trainerTips": [
                "Split the 21 thrusters as needed",
                "Try to do the 9 and 6 thrusters unbroken",
                "RX Weights: 115lb/75lb"
            ]
        },
        {
            "id": "4a3d9aaa-608c-49a7-a004-66305ad4ab50",
            "name": "Dead Push-Ups",
            "mode": "AMRAP 10",
            "equipment": ["barbell"],
            "exercises": ["15 deadlifts", "15 hand-release push-ups"],
            "createdAt": "1/25/2022, 1:15:44 PM",
            "updatedAt": "3/10/2022, 8:21:56 AM",
            "trainerTips": [
                "Deadlifts are meant to be light and fast",
                "Try to aim for unbroken sets",
                "RX Weights: 135lb/95lb"
            ]
        },
        {
            "id": "d8be2362-7b68-4ea4-a1f6-03f8bc4eede7",
            "name": "Heavy DT",
            "mode": "5 Rounds For Time",
            "equipment": ["barbell", "rope"],
            "exercises": ["12 deadlifts", "9 hang power cleans", "6 push jerks"],
            "createdAt": "11/20/2021, 5:39:07 PM",
            "updatedAt": "11/20/2021, 5:39:07 PM",
            "trainerTips": [
                "Aim for unbroken push jerks",
                "The first three rounds might feel terrible, but stick to it",
                "RX Weights: 205lb/145lb"
            ]
        }
    ]
}
```

<h2>Routes</h2>

![Blank diagram (1)](https://user-images.githubusercontent.com/65488251/190661372-30855a93-06bd-4d48-b29a-cb824366707b.svg)

<h2> Dockerization the app </h2>

For Dockerization I use Docker and for Image build the Dockerfile.

And for automatic build the container with the help of the docker-compose.

<h2>also deploy the app to the amazon ec2 instace and run the container with the help of compose.</h2>
