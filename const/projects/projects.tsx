import {
  Header,
  Image,
  Link,
  List,
  Paragraph,
  YouTube,
} from '../../components/projects/project';
import type { LanguageStringsStructure } from '../../lib/languages';
import type { IR } from '../../lib/utilities';
import battleship1 from '../../public/projects/images/battleship/1.png';
import battleship2 from '../../public/projects/images/battleship/2.png';
import lifemapper1 from '../../public/projects/images/lifemapper/1.jpg';
import lifemapper2 from '../../public/projects/images/lifemapper/2.jpg';
import lifemapper3 from '../../public/projects/images/lifemapper/3.png';
import lifemapper4 from '../../public/projects/images/lifemapper/4.png';
import lifemapper5 from '../../public/projects/images/lifemapper/5.png';
import lifemapper6 from '../../public/projects/images/lifemapper/6.png';
import openApi1 from '../../public/projects/images/open-api/1.png';
import pixelland1 from '../../public/projects/images/pixelland/1.png';
import pixelland2 from '../../public/projects/images/pixelland/2.png';
import pixelland3 from '../../public/projects/images/pixelland/3.png';
import taxa1 from '../../public/projects/images/taxa/1.png';
import taxa2 from '../../public/projects/images/taxa/2.png';
import taxa3 from '../../public/projects/images/taxa/3.png';
import testPanel1 from '../../public/projects/images/test-panel/1.png';
import testPanel2 from '../../public/projects/images/test-panel/2.png';
import testPanel3 from '../../public/projects/images/test-panel/3.png';
import testPanel4 from '../../public/projects/images/test-panel/4.png';
import tetris1 from '../../public/projects/images/tetris/1.png';
import tetris2 from '../../public/projects/images/tetris/2.png';
import tetris3 from '../../public/projects/images/tetris/3.png';
import tetris4 from '../../public/projects/images/tetris/4.png';
import ttsKing1 from '../../public/projects/images/tts-king/1.png';
import ttsKing2 from '../../public/projects/images/tts-king/2.png';
import ttsKing3 from '../../public/projects/images/tts-king/3.png';
import workbench1 from '../../public/projects/images/workbench/1.png';
import workbench2 from '../../public/projects/images/workbench/2.png';
import workbench3 from '../../public/projects/images/workbench/3.png';
import workbench4 from '../../public/projects/images/workbench/4.jpg';

export type Project = {
  readonly gitHub: string;
  readonly localized: LanguageStringsStructure<{
    title: string;
    description: string;
    content: JSX.Element;
  }>;
};

export const projects: IR<Project> = {
  workbench: {
    gitHub: 'https://github.com/specify/specify7',
    localized: {
      'en-US': {
        title: 'Specify 7 WorkBench',
        description:
          'Bulk data uploading system for collection management software',
        content: (
          <>
            <Paragraph>
              WorkBench is a bulk data uploading system for collection
              management software, Specify 7.
            </Paragraph>
            <List
              caption={`
                I worked on the front-end, including the following features:
              `}
            >
              <li>Support for spreadsheets of up to 500,000 rows</li>
              <li>Built-in coordinate converter</li>
              <li>Live and static data validation</li>
              <li>Efficient cell search and navigation</li>
              <li>Keyboard navigation and screen reader support</li>
              <li>
                Integration with GEOLocate to help batch identify locality data
              </li>
              <li>
                Automatic mapping of spreadsheet columns to database fields with
                respect to -to-one and -to-many data model relationships.
              </li>
            </List>

            <Header>Screenshots</Header>
            <Image source={workbench1}>Workbench</Image>
            <Image source={workbench2}>Coordinate Converter</Image>
            <Image source={workbench3}>Column mapper</Image>
            <Image source={workbench4}>Plotting data with Leaflet</Image>

            <YouTube
              caption="Video review"
              description={`
                An overview of a beta version of the WorkBench by one of our
                team members:
              `}
              video="lg9ybKMPQXI"
            />

            <Header>Online demo</Header>
            <Paragraph>
              You can try out the live version at{' '}
              <Link href="http://workbench.test.specifycloud.org/">
                workbench.test.specifycloud.org
              </Link>
              . Username and password are{' '}
              <mark className="text-red-700">demouser</mark>. When prompted to
              select a collection, choose any option. See usage instructions in
              the video above.
            </Paragraph>

            <Header>Technologies used</Header>
            <List>
              <li>Javascript ES6+</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Docker</li>
              <li>Leaflet (library for interactive maps)</li>
            </List>

            <YouTube
              caption="Overview of the mapping capabilities"
              video="ELc4srgjvkU"
            />
            <YouTube
              caption="Overview of the mapping capabilities (in Russian)"
              video="fw_Ps4nF5FY"
              start={386}
            />
          </>
        ),
      },
    },
  },
  'specify7-test-panel': {
    gitHub: 'http://github.com/specify/specify7-test-panel',
    localized: {
      'en-US': {
        title: 'Specify 7 Test Panel',
        description:
          'A dashboard for deploying Specify 7 instances for QA purposes',
        content: (
          <>
            <Paragraph>
              Test Panel is a Dashboard for configuring a cluster of docker
              containers of{' '}
              <Link href="http://github.com/specify/specify7">Specify 7</Link>,
              with an automatic deployment feature.
            </Paragraph>
            <Paragraph>
              The Test Panel is used to easily test different versions of the
              software and to speed up the QA process for bug fixes by
              automatically deploying bug fixes that are ready to be tested .
            </Paragraph>
            <List caption="Notable features">
              <li>
                Ability to reconfigure an existing deployment, or add a new one
              </li>
              <li>Automatic deployment of bug fixes that a ready to test</li>
              <li>
                Automatic cleanup of old deployments that are no longer used
              </li>
              <li>Beautiful UI</li>
              <li>GitHub oAuth authentication</li>
              <li>
                Regular polling of data to update the status of each deployment
              </li>
              <li>Ability to upload/download/drop a database</li>
            </List>
            <Paragraph>
              These features are described in more detail below:
            </Paragraph>

            <Header>Automatic deployments</Header>
            <Paragraph>
              A GitHub Webhook has been configured for the Specify 7 repository
              which pings the test panel to check if some bug is ready to be
              tested.
            </Paragraph>
            <Paragraph>
              A ready to be tested bug is defined as a branch in the Specify 7
              repository, for which all automated test have passed, and which
              has an associated pull-request that has been assigned for review
              to the QA team (or a member of the team), and has not yet been
              reviewed. If pull-request has been assigned for review both to a
              member of the development team and a member of the QA team, the
              test panel deploys the branch only after the developer has
              approved the pull request, so as not to waste QA team's time
              testing code that may be rejected.
            </Paragraph>
            <Paragraph>
              If a maximum number of deployments has already been reached
              (defined in the config file), the test panel tries to destroy old
              deployments that haven't been accessed recently.
            </Paragraph>
            <Image source={testPanel1}>Automatic deployments</Image>

            <Header>Custom deployments</Header>
            <Paragraph>
              Besides the automated deployments, there is often a need to test a
              specific branch (e.i. production) in a specific database to
              replicate a bug, or get everything ready for a release.
            </Paragraph>
            <Paragraph>
              For these purposes, any deployment can have its configuration
              changed. Each deployment has an associated DockerHub tag (created
              from a HEAD of a GitHub branches), a database and a datamodel
              version
            </Paragraph>
            <Image source={testPanel2}>Custom deployments (+dark mode)</Image>

            <Header>Database Management</Header>
            <Paragraph>
              Besides all deployments running in Docker, the test panel itself
              is Dockerized. Docker composition comes with a MariaDB server to
              provide databases for deployments.
            </Paragraph>
            <Paragraph>
              Dashboard provides a list of databases, a list of users in each
              database (needed for authentication into a Specify 7 instance), an
              ability to upload a new database, download an existing one, or
              drop it.
            </Paragraph>
            <Image source={testPanel3}>Database management (+dark mode)</Image>

            <Header>Online demo</Header>
            <Paragraph>
              For security purposes, the test panel is protected behind a GitHub
              oAuth authentication, which only permits signing it with accounts
              that are members of the{' '}
              <Link href="https://github.com/specify/">
                "specify" GitHub organization
              </Link>
              . Thus, even though a live version is available at,{' '}
              <Link href="https://test.specifysystems.org/">
                test.specifysystems.org
              </Link>
              , the dashboard itself is inaccessible. If you want to try out the
              test panel, I encourage you to deploy it on your own machine.
            </Paragraph>
            <Paragraph>
              Exhaustive deployment instructions are documented in the
              <Link href="https://github.com/specify/specify7-test-panel#readme">
                README.md
              </Link>
            </Paragraph>
            <Paragraph>
              It should be possible to reconfigure the dashboard to server
              deployments of software other than Specify 7.
            </Paragraph>
            <Image source={testPanel4}>Sign-in screen (+dark mode)</Image>

            <Header>Technologies used</Header>
            <List>
              <li>Docker</li>
              <li>Javascript ES6+</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>react-modal</li>
              <li>Next.js</li>
              <li>Tailwind.CSS</li>
              <li>MariaDB (and a mysql2 npm dependency)</li>
            </List>
          </>
        ),
      },
    },
  },
  lifemapper: {
    gitHub: 'https://github.com/specify/specify7',
    localized: {
      'en-US': {
        title: 'Species distribution projection map',
        description:
          'Interactive Leaflet map with multiple base layers and overlays',
        content: (
          <>
            <Paragraph>
              Species distribution map shows a projection of where particular
              species may be commonly found. The map is generated by Lifemapper
              and is based on public records submitted to GBIF.
            </Paragraph>
            <Paragraph>
              I added an interactive Leaflet map that shows the projection map
              for the species you are currently looking at in the collection
              management system, Specify 7.
            </Paragraph>
            <Paragraph>
              Along with the distribution map and several base layers, specimen
              occurrence points from the local database are also displayed to
              show how local data compares to that of GBIF.
            </Paragraph>

            <Header>Screenshots</Header>
            <Image source={lifemapper1}>
              Projection map along with local occurrence points
            </Image>
            <Image source={lifemapper2}>
              Projection map for &quot;Labidesthes sicculus&quot;
            </Image>
            <Image source={lifemapper3}>
              Pop-up bubble with information about a specimen
            </Image>
            <Image source={lifemapper4}>
              Pop-up bubble with information about a specimen
            </Image>
            <Image source={lifemapper5}>
              Occurrences of &quot;Mycteroperca microlepis&quot; as reported by
              several data aggregators
            </Image>
            <Image source={lifemapper6}>
              A heat-map of all the specimens obtained by a collection between
              1901 and 2021
            </Image>

            <Header>Technologies used</Header>
            <List>
              <li>Javascript ES6+</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Docker</li>
              <li>Leaflet (library for interactive maps)</li>
              <li>Python (CherryPy)</li>
            </List>

            <YouTube caption="Video overview" video="AQeWtZxQTns" />
            <YouTube
              caption="Video overview (in Russian)"
              video="fw_Ps4nF5FY"
              start={160}
            />
          </>
        ),
      },
    },
  },
  'open-api': {
    gitHub: 'https://github.com/specify/open_api_tools/',
    localized: {
      'en-US': {
        title: 'OpenAPI-based automated tests',
        description:
          'Autogenerated tests of API services based on OpenAPI Schema',
        content: (
          <>
            <Paragraph>
              Public APIs must be stable and reliable, yet manual testing is
              often not practical due to time constraints. Thankfully, OpenAPI
              schema allows to define endpoints, describe their input parameters
              as well as the response schema in a machine readable way.
            </Paragraph>
            <Paragraph>
              This schema can then be used to validate incoming requests on the
              fly, as well as to provide continuous testing.
            </Paragraph>
            <Paragraph>
              The OpenAPI testing framework I developed is able to run automated
              tests on all endpoints by randomly creating a valid query string
              and comparing the response object against the schema.
            </Paragraph>
            <Image source={openApi1}>Example automated tests</Image>
            <Paragraph>
              While automated tests are an awesome low-effort solution,
              sometimes you need to provide specific test values and define
              expected constrains (how given parameter should affect the
              output). This use case is also handled by the libriaryj.
            </Paragraph>
            <Paragraph>
              Additionally, some tests may require to run a particular sequence
              of operations (for example, Create, View, Edit, View, Delete).
              This can be solved though Chain tests, where the testing framework
              would run the output of one request though a generator to produce
              the input for the next request and so on.
            </Paragraph>

            <YouTube
              caption="A non-technical overview of APIs"
              video="nOJGjxUEwAI"
            />

            <Paragraph>
              By default, the testing framework runs tests on all endpoints,
              prints any issues and exits once done. For the purposes of
              continuous integration it may be desirable to continuously run
              periodic tests, results of which are logged and failures are
              reported. My coworker developed a testing daemon and a scheduler
              just for that -{' '}
              <Link href="https://github.com/lifemapper/lmtest/">LmTest</Link>.
            </Paragraph>
          </>
        ),
      },
    },
  },
  pixelland: {
    gitHub: 'https://github.com/maxxxxxdlp/eecs-448-pixelland',
    localized: {
      'en-US': {
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
              <li>
                Procedurally generated map with biomes and patches of resources
              </li>
              <li>Inventory system with block placement support</li>
              <li>Save & Load capability</li>
              <li>
                The game utilizes OffscreenCanvas to cache resized textures and
                improve performance
              </li>
              <li>Special Development, Debugging and Testing modes</li>
              <li>Autogenerated documentation</li>
              <li>
                Extensive description of the development and deployment process
              </li>
              <li>Keyboard navigation and screen reader support.</li>
            </List>
            <Paragraph>
              I worked on this project in a Team of 5 as part of the EECS 448
              class at the University of Kansas. I took on the responsibilities
              of a team lead, which involved keeping the team on track,
              prioritizing features and working on the most complex parts of the
              project.
            </Paragraph>
            <Paragraph>
              Other team members lacked some experience with JavaScript, which
              made this project harder.
            </Paragraph>

            <Header>Screenshots</Header>
            <Image source={pixelland1}>Minecraft Map</Image>
            <Image source={pixelland2}>Rainbowland Map</Image>
            <Image source={pixelland3}>Minecraft Map</Image>

            <Header>Online demo</Header>
            <Paragraph>
              <Link href="https://people.eecs.ku.edu/~m001p596/project/eecs-448-pixelland/eecs-448-project-3/">
                Try out the live version
              </Link>
            </Paragraph>

            <YouTube caption="Video Demo" video="3guzbg383WA" />

            <Header>Technologies used</Header>
            <Paragraph>
              Since there was a varying level of experience between the team
              members, we decided not to use any fancy framework. Instead,{' '}
              <Link href="https://github.com/maxxxxxdlp/eecs-448-pixelland/blob/main/eecs-448-project-3/lib/js/view.js">
                I wrote a tiny MVC library
              </Link>{' '}
              modeled after Backbone.js's views.
            </Paragraph>
            <Paragraph>
              Additionally, we used OpenSimplex Noise generator to facilitate
              biome and terrain generation.
            </Paragraph>

            <Header>Documentation</Header>
            <Paragraph>
              There is{' '}
              <Link href="https://people.eecs.ku.edu/~m001p596/project/eecs-448-pixelland/documentation/auto-docs-gen/">
                autogenerated documentation
              </Link>{' '}
              based on JsDoc comments and{' '}
              <Link href="https://github.com/maxxxxxdlp/eecs-448-pixelland/tree/main/documentation">
                extensive deployment instructions
              </Link>
              .
            </Paragraph>
          </>
        ),
      },
    },
  },
  'tts-king': {
    gitHub: 'https://github.com/maxxxxxdlp/TTS_King',
    localized: {
      'en-US': {
        title: 'TTS King',
        description: `
          Turn daily news digests into audio you can listen to wherever you are
        `,
        content: (
          <>
            <Paragraph>
              Convert your daily news digests into a simple podcast you can
              listen to while in transit, walking or even exercising. TTS King
              helps you stay productive no matter where you are!
            </Paragraph>
            <Paragraph>
              The idea behind this website was to automatically convert your
              newsletter emails and favorite news articles to audio files using
              Text-To-Speech technologies and then to download these audio files
              to your phone for offline playback.
            </Paragraph>
            <Paragraph>
              The site is still under development and has a lot of missing
              features. It&#39;s been in development for quite a while now
              because when I started, I decided to learn a completely new tech
              stack to freshen up my skills (since PHP, Bootstrap and MySQL no
              longer are a hot topic of discussion).
            </Paragraph>

            <Header>Technologies used</Header>
            <List>
              <li>Next.js</li>
              <li>Firebase Authentication & Realtime Database</li>
              <li>Tailwind.css</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Javascript ES6+</li>
            </List>

            <Header>Screenshots</Header>
            <Image source={ttsKing1}>Landing page</Image>
            <Image source={ttsKing2}>
              User&#39;s news streams configuration
            </Image>
            <Image source={ttsKing3}>User&#39;s profile</Image>
          </>
        ),
      },
    },
  },
  taxa: {
    gitHub: 'https://github.com/specify/taxa_tree/',
    localized: {
      'en-US': {
        title: 'Taxa Tree of Life Generator',
        description: `
          Convert Taxonomic Tree of Life from various authorities into a CSV
          file
        `,
        content: (
          <>
            <Paragraph>
              There are various taxon data authorities that allow downloading
              their data either one species at a time, or as a huge SQL dump
              file, which is not practical for some use cases.
            </Paragraph>

            <Paragraph>
              I developed a simple tool that allows easy download of a subset of
              data from GBIF, Catalogue of Life or ITIS as a CSV file.
            </Paragraph>

            <Paragraph>
              In addition to being able to specify which Phylums, Genera and
              Species should be included in the exported file, you can choose
              among various Infra- and Sub- specific ranks or to include
              optional metadata to better customize the result to your needs
            </Paragraph>

            <Header>Online demo</Header>
            <Paragraph>
              You can try out the live version at{' '}
              <Link href="https://taxon.specifysoftware.org/itis/">
                taxon.specifysoftware.org
              </Link>
              .
            </Paragraph>

            <Header>Technologies used</Header>
            <List>
              <li>PHP 7.4</li>
              <li>Nginx</li>
              <li>Docker</li>
              <li>MySQL</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
            </List>

            <Header>Screenshots</Header>
            <Image source={taxa1}>Kingdom selection screen</Image>
            <Image source={taxa2}>Configuring GBIF export</Image>
            <Image source={taxa3}>Configuring ITIS export</Image>
          </>
        ),
      },
    },
  },
  'tetris-react': {
    gitHub:
      'https://github.com/maxxxxxdlp/max.patii.uk/blob/main/pages/projects/tetris.tsx',
    localized: {
      'en-US': {
        title: 'Tetris React',
        description: 'A tetris game written in React and Ramda.js',
        content: (
          <>
            <Paragraph>
              Tetris was one game I could always easily lose myself in. I
              decided to make learning Next.js and Ramda.js more fun by trying
              to build a game with them.
            </Paragraph>
            <Paragraph>
              The result is an oddly addictive and fun browser game. Thanks to
              pause, save and load mechanics you can play it briefly between the
              meetings or try to beat your friend&#39;s best score by
              discovering one of the secret cheat-codes hidden in the game.
            </Paragraph>

            <Header>Online demo</Header>
            <Paragraph>
              You can try out the live version at{' '}
              <Link href="https://max.patii.uk/projects/tetris">
                max.patii.uk/projects/tetris
              </Link>
              .
            </Paragraph>

            <Header>Technologies used</Header>
            <List>
              <li>Next.js</li>
              <li>Ramda.js</li>
              <li>Tailwind.css</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Javascript ES6+</li>
            </List>

            <Header>Screenshots</Header>
            <Image source={tetris1}>Screenshot from the game</Image>
            <Image source={tetris2}>Screenshot from the game</Image>
            <Image source={tetris3}>I am about to lose....</Image>
            <Image source={tetris4}>Gave over((</Image>

            <Paragraph>By the way, can you beat my high score?</Paragraph>
          </>
        ),
      },
    },
  },
  battleship: {
    gitHub: 'https://github.com/maxxxxxdlp/eecs-448-battleship',
    localized: {
      'en-US': {
        title: 'Battleship',
        description: 'A modern spin on a classic game',
        content: (
          <>
            <Paragraph>
              A simple turn-based game of war. Place up to 6 ships on a 9x10
              grid and try to sink your opponent's ships before they sink yours.
            </Paragraph>
            <Paragraph>
              I worked on this project in a Team of 5. I took on the
              responsibilities of a team lead, which involved keeping the team
              on track, prioritizing features and working on the most complex
              parts of the project.
            </Paragraph>
            <Paragraph>
              Other team members lacked some experience with JavaScript, which
              made this project harder.
            </Paragraph>
            <Paragraph>
              This project was done as part of EECS 448 class at the University
              of Kansas. One of the goals of the project was to write readable
              code with sufficient documentation for another team of 5 students
              to be able to pick up our game and add additional features.
            </Paragraph>
            <Paragraph>
              While traditional Battleship game would require some sort of
              multiplayer support to coordinate the game state between two
              players, we chose a simpler, and ultimately more intimate
              approach. Two players are supposed to open the game on separate
              computers. When any player makes a move, they are supposed to ask
              the opposite if it was a hit or miss and press the corresponding
              button in the game when promoted.
            </Paragraph>
            <Paragraph>
              Essentially, the state of the game is synchronized through verbal
              communication between the players, which is intended to make the
              game feel more personal and meaningful.
            </Paragraph>

            <Header>Screenshots</Header>
            <Image source={battleship1}>Ship Placement</Image>
            <Image source={battleship2}>Game Boards</Image>

            <Header>Online demo</Header>
            <Paragraph>
              <Link href="http://mambo.zzz.com.ua/project/eecs-448-battleship/eecs-448-battleship/">
                Try out the live version
              </Link>
            </Paragraph>

            <Header>Technologies used</Header>
            <Paragraph>
              Since there was a varying level of experience between the team
              members, we decided not to use any fancy framework. Instead,{' '}
              <Link href="https://github.com/maxxxxxdlp/eecs-448-battleship/blob/main/eecs-448-battleship/lib/js/view.js">
                I wrote a tiny MVC library
              </Link>{' '}
              modeled after Backbone.js's views.
            </Paragraph>

            <Header>Documentation</Header>
            <Paragraph>
              There is{' '}
              <Link href="http://mambo.zzz.com.ua/project/eecs-448-battleship/documentation/auto-docs-gen/">
                autogenerated documentation
              </Link>{' '}
              based on JsDoc comments and{' '}
              <Link href="https://github.com/maxxxxxdlp/eecs-448-battleship/tree/main/documentation">
                extensive deployment instructions
              </Link>
              .
            </Paragraph>
          </>
        ),
      },
    },
  },
};
