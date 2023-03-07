import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

let nprogress;

if (typeof window !== 'undefined') {
  nprogress = {
    start: () => NProgress.start(),
    done: () => NProgress.done(),
  };
} else {
  nprogress = {
    start: () => {},
    done: () => {},
  };
}

export default nprogress;
