/**
 *
 * Asynchronously loads the component for PostPage
 *
 */
import LoadingIndicator from 'components/LoadingIndicator';

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => LoadingIndicator,
});
