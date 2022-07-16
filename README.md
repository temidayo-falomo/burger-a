##Author's Note

!!!!!!Thought Process!!!!!!!!!!

##1: Created States for the individual ingridients(which was a bit stressful)
e.g const [mayoCount, setMayoCount] = useState(2);

##2: Created an object containing each ingridient and the current amount the user has added, which is by default = 0
e.g const burger = {
mayo: 0,
salad: 0,
cutlet: 0,
};

##3: Now, for the best part, i'm using a very Intuitive(i must say) spread syntax technique i discovered to repeat a particular Ingredient based on the current count
e.g {[...Array(burger.mayo + mayoCount)].map((index) => {
return (img src=IMAGEURL />);
})}

!!!!!!!!Helpful Links!!!!!!!!!!!!

How to use [...Array(n)] ?
https://simplernerd.com/jsx-repeat-n-times/


!!!!!!!!! Hooks used !!!!!!!!!!!!

1. useState
2. useEffect
3. useContext


!!!!!!!!! Extra Notes !!!!!!!

I Built this because i'm a sucker for goood ui and I had some free time on my hands.
You should Absolutely check out the UI designer on Figma.
I added a few mods of my own 👀

##My Portfolio (Hire Me)
https://temidayo-falomo.netlify.app/

##Designer's Figma Link
https://www.figma.com/@vittorioewing

##Link to Free Figma File
https://www.figma.com/community/file/1107567946234728369

