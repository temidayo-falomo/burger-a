
# Burger-A

A web app that allows users to build their custom Burger & Mimic Checkout.
## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
    
## Demo

https://burger-a.netlify.app/make-burger


## Support

For support, email temmideee@gmail.com or send a message on Twitter.


## Documentation

- Created States for the individual ingridients(which was a bit stressful) e.g const [mayoCount, setMayoCount] = useState(2);

- Created an object containing each ingridient and the current amount the user has added, which is by default = 0. E.g const burger = { mayo: 0, salad: 0, cutlet: 0, };

- Now, for the best part, i'm using a very Intuitive(i must say) spread syntax technique i discovered to repeat a particular Ingredient based on the current count e.g {[...Array(burger.mayo + mayoCount)].map((index) => { return (img src=IMAGEURL />); })}

##

## Helpful Links:

How to use ...Array(n)
(https://simplernerd.com/jsx-repeat-n-times/)

##

# Hooks

useState

useEffect

useContext



## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [My Portfolio](https://temidayo-falomo.netlify.app/)
 - [Designer's Figma Link](https://www.figma.com/@vittorioewing)
 - [Link to Free Figma File](https://www.figma.com/community/file/1107567946234728369)
 
## License

[MIT](https://choosealicense.com/licenses/mit/)

