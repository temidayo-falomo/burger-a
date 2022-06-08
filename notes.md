{
  "ingridients": [
    {
      "id": 1,
      "image": "./assets/cutlet.svg",
      "name": "Cutlet"
    },
    {
      "id": 2,
      "image": "./assets/mayo.svg",
      "name": "Mayo"
    },
    {
      "id": 3,
      "image": "./assets/onion.svg",
      "name": "Onion"
    },
    {
      "id": 4,
      "image": "./assets/tomatoe.svg",
      "name": "Tomatoe"
    },
    {
      "id": 5,
      "image": "./assets/cucumber.svg",
      "name": "Cucumber"
    },
    {
      "id": 6,
      "image": "./assets/cheese.svg",
      "name": "Cheese"
    },
    {
      "id": 7,
      "image": "./assets/salad.svg",
      "name": "Salad"
    },
    {
      "id": 8,
      "image": "./assets/bun_middle.svg",
      "name": "Bun"
    }
  ]
}

      {/* {arr.map((data, index) => {
          return <div className="useimg" key={index}>{data}</div>;
        })} */}

                {countData.map((data, index) => {
          return (
            <div className="useimg" key={index}>
              <img src={data.image} alt="" />
            </div>
          );
        })}