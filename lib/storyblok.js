import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: "5upTlogxS8rSVHab5Mi7Egtt",
  cache: {
    clear: "auto",
    type: "memory"
  }
});

export default Storyblok;
