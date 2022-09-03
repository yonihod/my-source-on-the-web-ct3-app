import TypeWrtier from "typewriter-effect";

const Subtitle = () => (
    <code className="w-full text-sm leading-loose">
        <TypeWrtier
            options={{ delay: 40 }}
            onInit={(typewriter) => {
        typewriter
          .pauseFor(2000)
          .typeString("<span class='text-blue-600'>const </span>")
          .typeString("Yoni: Array<")
          .typeString("<span class='text-green-500'>Object</span>")
          .typeString("> ")
          .typeString("<span class='text-blue-600'>= </span>")
          .typeString("[<br>")
          .typeString("<span class='pl-5'></span>")
          .typeString("<span class='text-red-500'>Fullstack</span>, ")
          .typeString("<span class='text-red-500'>Javascript</span>, ")
          .typeString("<span class='text-red-500'>React.js</span>, ")
          .typeString("<span class='text-red-500'>Javascript</span>, ")
          .typeString("<span class='text-red-500'>Node.js</span>, ")
          .typeString("<span class='text-red-500'>Svelte</span>, ")
          .typeString("<span class='text-red-500'>...more</span>,<br>")
          .typeString("];")
          .start();
      }}
    />
    </code>
);


export default Subtitle;
