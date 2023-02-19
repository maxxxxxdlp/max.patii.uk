import {
  Header,
  Image,
  Link,
  Paragraph,
} from '../../components/projects/project';
import battleship1 from '../../public/projects/images/battleship/1.png';
import battleship2 from '../../public/projects/images/battleship/2.png';
import type { Project } from './index';

export const battleship: Project = {
  gitHub: 'https://github.com/maxxxxxdlp/eecs-448-battleship',
  title: 'Battleship',
  description: 'A modern spin on a classic game',
  content: (
    <>
      <Paragraph>
        A simple turn-based game of war. Place up to 6 ships on a 9x10 grid and
        try to sink your opponent's ships before they sink yours.
      </Paragraph>
      <Paragraph>
        I worked on this project in a Team of 5. I took on the responsibilities
        of a team lead, which involved keeping the team on track, prioritizing
        features, and working on the most complex parts of the project.
      </Paragraph>
      <Paragraph>
        Other team members lacked some experience with JavaScript, which made
        this project harder.
      </Paragraph>
      <Paragraph>
        This project was done as part of EECS 448 class at the University of
        Kansas. One of the goals of the project was to write readable code with
        sufficient documentation for another team of 5 students to be able to
        pick up our game and add additional features.
      </Paragraph>
      <Paragraph>
        While a traditional Battleship game would require some sort of
        multiplayer support to coordinate the game state between two players, we
        chose a simpler, and ultimately more intimate approach. Two players are
        supposed to open the game on separate computers. When any player makes a
        move, they are supposed to ask the opposite if it was a hit or miss and
        press the corresponding button in the game when promoted.
      </Paragraph>
      <Paragraph>
        Essentially, the state of the game is synchronized through verbal
        communication between the players, which is intended to make the game
        feel more personal and meaningful.
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
        Since there was a varying level of experience among the team members, we
        decided not to use any fancy framework. Instead,{' '}
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

      <Header>Things learned</Header>
      <Paragraph>
        This projected challenged my meager leadership skills, requiring me to
        relate to team members to find a way to motivate them and to find a task
        suitable for their skill level. It also required me to deal with cases
        when motivation of others didn't match my own or expectations about the
        scope of the project mismatched.
      </Paragraph>
    </>
  ),
};
