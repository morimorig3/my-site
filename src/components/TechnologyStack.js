import {
  SiJavascript,
  SiHtml5,
  SiSass,
  SiNodedotjs,
  SiTypescript,
  SiReact,
} from 'react-icons/si';
import { expTimes } from '@/lib/utils';

const TechnologyStack = () => (
  <>
    <ul className="flex flex-wrap gap-8 justify-center">
      <li>
        <SiReact size="3.5em" className="text-react" />
        <p className="mt-1 text-center text-gray-400 text-xs">
          {expTimes('2021/06/01')}
        </p>
      </li>
      <li>
        <SiJavascript size="3.5em" className="text-javascript" />
        <p className="mt-1 text-center text-gray-400 text-xs font-bold">
          {expTimes('2019/10/01')}
        </p>
      </li>
      <li>
        <SiTypescript size="3.5em" className="text-typescript" />
        <p className="mt-1 text-center text-gray-400 text-xs">
          {expTimes('2021/06/01')}
        </p>
      </li>
      <li>
        <SiSass size="3.5em" className="text-sass" />
        <p className="mt-1 text-center text-gray-400 text-xs font-bold">
          {expTimes('2020/04/01')}
        </p>
      </li>
      <li>
        <SiHtml5 size="3.5em" className="text-html" />
        <p className="mt-1 text-center text-gray-400 text-xs font-bold">
          {expTimes('2019/01/01')}
        </p>
      </li>
      <li>
        <SiNodedotjs size="3.5em" className="text-node" />
        <p className="mt-1 text-center text-gray-400 text-xs">
          {expTimes('2022/01/01')}
        </p>
      </li>
    </ul>
    <p className="text-xs text-gray-400 font-bold text-right">※実務経験</p>
  </>
);
export default TechnologyStack;
