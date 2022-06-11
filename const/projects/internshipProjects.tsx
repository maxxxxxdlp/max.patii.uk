import {
  Header,
  List,
  Paragraph,
  SubHeader,
} from '../../components/projects/project';
import type { IR } from '../../lib/utilities';
import type { Project } from './projects';

export const internshipProjects: IR<Project> = {
  'learning-objectives': {
    gitHub: undefined,
    localized: {
      'en-US': {
        title: 'Learning Objectives',
        description: '',
        content: (
          <>
            <Header>Learn from internal educational videos</Header>
            <SubHeader>Objective</SubHeader>
            <Paragraph>
              As part of working at Amazon, I get access to hundreds of
              educational videos, conferences, and recordings of conferences. I
              would like to make the most of this valuable opportunity to
              advance my knowledge in my areas of interest by watching at least
              50 hours of material.
            </Paragraph>

            <SubHeader>Learning Activities</SubHeader>
            <List>
              <li>
                Compile a list of videos that are relevant to my career and
                interests.
              </li>
              <li>
                If the video can be turned into an audio file without losing
                context, do so. This is the case if the material in the video is
                mostly conveyed through speech, and doesn't have slides or has
                only presentational sliders.
              </li>
              <li>
                Listen to the resulting audio files on my way to work and from
                work (I have 45 minutes of walking every day in both
                directions).
              </li>
              <li>
                For videos that can't be converted to audio files without losing
                information, watch them while having breakfast, lunch, or dinner
                to use the time most productively.
              </li>
            </List>

            <SubHeader>Evaluation</SubHeader>
            <Paragraph>
              I would consider this learning objective complete if I watch and
              listen to at least 50 hours of material over the span of the
              internship.
            </Paragraph>

            <Header>Learn from internal training courses</Header>
            <SubHeader>Objective</SubHeader>
            <Paragraph>
              Amazon employees get free access to training courses that are
              either not accessible to the public, or cost money. I want to make
              the most of the free access to training courses by completing at
              least 50 hours of courses that are relevant to my career.
            </Paragraph>

            <SubHeader>Learning Activities</SubHeader>
            <List>
              <li>
                Compile a list of training courses that are relevant to my
                interests.
              </li>
              <li>
                Dedicate 5 hours every Sunday to going through these training
                courses.
              </li>
              <li>
                Complete the examination after each training to gauge learning
                success.
              </li>
            </List>

            <SubHeader>Evaluation</SubHeader>
            <Paragraph>
              I would consider this learning objective complete if I manage to
              complete at least 50 hours of training courses.
            </Paragraph>

            <Header>Gain proficiency with software testing</Header>
            <Paragraph>
              This objective references several technical terms. A brief
              dictionary of terms has been provided at the bottom of the page.
            </Paragraph>

            <SubHeader>Objective</SubHeader>
            <Paragraph>
              I am not very proficient in writing unit tests and component tests
              for web applications. They are important as they help ensure the
              quality of every part of the program. My goal would be to achieve
              at least 90% code coverage for my internship project by the end of
              the internship.
            </Paragraph>

            <SubHeader>Learning Activities</SubHeader>
            <List>
              <li>
                Read the documentation for 3 of the most common software testing
                frameworks.
              </li>
              <li>
                In the process, ask my mentor and team members questions about
                things that are not clear.
              </li>
              <li>
                Write unit tests and component tests for every part of the
                program to achieve complete test coverage.
              </li>
              <li>
                In the process, my tests would be reviewed by my mentor and some
                team members. They would be leaving comments and suggesting
                changes to improve the quality of my tests.
              </li>
            </List>

            <SubHeader>Evaluation</SubHeader>
            <Paragraph>
              There are programs that calculate coverage percentage and create a
              report of areas that need improvement. I will use one of those
              tools to evaluate how close I am to completing this goal. I would
              consider this learning objective complete if I achieve 90% test
              coverage or higher.
            </Paragraph>

            <SubHeader>Definitions</SubHeader>
            <Paragraph>
              <b>Unit test</b> - an automated check that evaluates some small,
              isolated, and indivisible component of the program to ensure its
              behavior is defect-free and compliant with the specification.
            </Paragraph>
            <Paragraph>
              <b>Component test</b> - an automated check that evaluates an
              isolated user interface component of the program to ensure its
              behavior is defect-free and compliant with the specification.
            </Paragraph>
            <Paragraph>
              <b>Framework</b> - a collection of scripts designed to be used as
              part of another program to achieve some goal (in this case, to
              test the program).
            </Paragraph>
            <Paragraph>
              <b>Test coverage</b> - refers to the percentage of the overall
              program's code that has some associated test vouching for its
              quality.
            </Paragraph>
          </>
        ),
      },
    },
  },
  'demonstrated-achievements': {
    gitHub: undefined,
    localized: {
      'en-US': {
        title: 'Demonstrated Achievements',
        description: '',
        content: (
          <>
            <Paragraph>TODO</Paragraph>
          </>
        ),
      },
    },
  },
  spotlight: {
    gitHub: undefined,
    localized: {
      'en-US': {
        title: 'Spotlight',
        description: '',
        content: (
          <>
            <Paragraph>TODO</Paragraph>
          </>
        ),
      },
    },
  },
};
