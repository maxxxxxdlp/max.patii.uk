import {
  Header,
  Image,
  Link,
  List,
  Paragraph,
  YouTube,
} from '../../components/projects/project';
import openApi1 from '../../public/projects/images/open-api/1.png';
import type { Project } from './index';

export const openApi: Project = {
  gitHub: 'https://github.com/specify/open_api_tools/',
  title: 'OpenAPI-based automated tests',
  description: 'Autogenerated tests of API services based on OpenAPI Schema',
  content: (
    <>
      <Paragraph>
        Public APIs must be stable and reliable, yet manual testing is often not
        practical due to time constraints. Thankfully, the OpenAPI schema allows
        to define endpoints, and describe their input parameters as well as the
        response schema in a machine-readable way.
      </Paragraph>
      <Paragraph>
        This schema can then be used to validate incoming requests on the fly,
        as well as to provide continuous testing.
      </Paragraph>
      <Paragraph>
        The OpenAPI testing framework I developed can run automated tests on all
        endpoints by randomly creating a valid query string and comparing the
        response object against the schema.
      </Paragraph>
      <Image source={openApi1}>Example automated tests</Image>
      <Paragraph>
        While automated tests are an awesome low-effort solution, sometimes you
        need to provide specific test values and define expected constraints
        (how a given parameter should affect the output). This use case is also
        handled by the library.
      </Paragraph>
      <Paragraph>
        Additionally, some tests may require running a particular sequence of
        operations (for example, Create, View, Edit, View, Delete). This can be
        solved through Chain tests, where the testing framework would run the
        output of one request through a generator to produce the input for the
        next request and so on.
      </Paragraph>

      <YouTube
        caption="Recorded presentation from TDWG 2021"
        video="G_3lzy_wOHI"
      />

      <YouTube caption="A non-technical overview of APIs" video="nOJGjxUEwAI" />

      <Paragraph>
        By default, the testing framework runs tests on all endpoints, prints
        any issues, and exits once done. For the purposes of continuous
        integration, it may be desirable to continuously run periodic tests,
        results of which are logged and failures are reported. My coworker
        developed a testing daemon and a scheduler just for that -{' '}
        <Link href="https://github.com/lifemapper/lmtest/">LmTest</Link>.
      </Paragraph>

      <Header>Technologies used</Header>
      <List>
        <li>Python</li>
        <li>OpenAPI v3.0</li>
        <li>JSON Schema</li>
        <li>Flask</li>
      </List>

      <Header>Things learned</Header>
      <Paragraph>
        Close to the end of this project, I found out that GraphQL exists, and
        that it already does most of the things I was trying to reinvent, but it
        does a much better job of it. Unfortunately, we can't move completely to
        GraphQL as it would require a big migration. Still, this was one more
        reminder to do research of existing solutions before trying to creat a
        yet another library
      </Paragraph>
    </>
  ),
};
