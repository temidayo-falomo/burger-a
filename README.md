##Author's Note

I Built this because i'm a sucker for goood ui and I had some free time on my hands.
You should Absolutely check out the UI designer on Figma.
I added a few mods of my own 👀

##My Portfolio (Hire Me)
https://temidayo-falomo.netlify.app/

##Designer's Figma Link
https://www.figma.com/@vittorioewing

##Link to Free Figma File
https://www.figma.com/community/file/1107567946234728369

##Thought Process

const [mayoCount, setMayoCount] = (2);

const burger = {
mayo: 0,
salad: 0,
cutlet: 0,
};

{[...Array(burger.mayo + mayoCount)].map((index) => {
return <img src="./assets/mayo.svg" alt="mayo-pic"/>;
})}

How to use [...Array(n)] ?
https://simplernerd.com/jsx-repeat-n-times/