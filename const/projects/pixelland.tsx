import {
  Header,
  Image,
  Link,
  List,
  Paragraph,
  YouTube,
} from '../../components/Atoms/Project';
import pixelland1 from '../../public/projects/images/pixelland/1.png';
import pixelland2 from '../../public/projects/images/pixelland/2.png';
import pixelland3 from '../../public/projects/images/pixelland/3.png';
import type { Project } from './index';

export const pixelland: Project = {
  gitHub: 'https://github.com/maxpatiiuk/eecs-448-pixelland',
  title: 'Pixelland',
  description: 'A Canvas-based walking & building simulator',
  content: (
    <>
      <Paragraph>A Canvas-based walking & building simulator</Paragraph>
      <List
        caption={`
                Notable features:
              `}
      >
        <li>Procedurally generated map with biomes and patches of resources</li>
        <li>Inventory system with block placement support</li>
        <li>Save & Load capability</li>
        <li>
          The game utilizes OffscreenCanvas to cache resized textures and
          improve performance
        </li>
        <li>Special Development, Debugging, and Testing modes</li>
        <li>Autogenerated documentation</li>
        <li>Extensive description of the development and deployment process</li>
        <li>Keyboard navigation and screen reader support.</li>
      </List>
      <Paragraph>
        I worked on this project in a Team of 5 as part of the EECS 448 class at
        the University of Kansas. I took on the responsibilities of a team lead,
        which involved keeping the team on track, prioritizing features, and
        working on the most complex parts of the project.
      </Paragraph>
      <Paragraph>
        Other team members lacked some experience with JavaScript, which made
        this project harder.
      </Paragraph>

      <Header>Screenshots</Header>
      <Image source={pixelland1}>Minecraft Map</Image>
      <Image source={pixelland2}>Rainbowland Map</Image>
      <Image source={pixelland3}>Minecraft Map</Image>

      <Header>Online demo</Header>
      <Paragraph>
        <Link href="https://maxpatiiuk.github.io/eecs-448-pixelland/eecs-448-project-3/">
          Try out the live version
        </Link>
      </Paragraph>

      <YouTube caption="Video Demo" video="3guzbg383WA" />

      <Header>Technologies used</Header>
      <Paragraph>
        Since there was a varying level of experience among the team members, we
        decided not to use any fancy framework. Instead,{' '}
        <Link href="https://github.com/maxpatiiuk/eecs-448-pixelland/blob/main/eecs-448-project-3/lib/js/view.js">
          I wrote a tiny MVC library
        </Link>{' '}
        modeled after Backbone.js's views.
      </Paragraph>
      <Paragraph>
        Additionally, we used the OpenSimplex Noise generator to facilitate
        biome and terrain generation.
      </Paragraph>

      <Header>Documentation</Header>
      <Paragraph>
        There is{' '}
        <Link href="https://maxpatiiuk.github.io/eecs-448-pixelland/documentation/auto-docs-gen/">
          autogenerated documentation
        </Link>{' '}
        based on JsDoc comments and{' '}
        <Link href="https://github.com/maxpatiiuk/eecs-448-pixelland/tree/main/documentation">
          extensive deployment instructions
        </Link>
        .
      </Paragraph>

      <Header>Things learned</Header>
      <Paragraph>
        This project was developer under unique circumstances in the sense that
        when we begun it we didn't try to think to hard about what we were
        trying to achieve and just went along for the ride to see what we get
        out of it.
      </Paragraph>
      <Paragraph>
        While that's not the way I commonly approach projects, this gave us a
        sense of freedom from externally imposed contains or fear of missing on
        expectations.
      </Paragraph>
      <Paragraph>
        Still, I am very happy with the result, especially the procedurally
        generated map algorithm I developed.
      </Paragraph>
      <Paragraph>
        One of the few goals we set at the beginning of this project was to not
        use any external libraries beyond what native HTML/CSS/JavaScript
        offered. This gave us an opportunity to learn about low level things
        like keyboard navigation and canvas rendering. At the same time, beyond
        the learning opportunity, this was not the most efficient way of doing
        things as we ended up reinventing solutions to solved problems.
      </Paragraph>
    </>
  ),
};
