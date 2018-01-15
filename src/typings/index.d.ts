/* tslint:disable:member-access */
import * as React from 'react';


declare module 'material-ui-not-found' {
  export import NotFound = __components.NotFound;
  export import NotFoundProps = __components.NotFoundProps;
  export import NotFoundContext = __components.NotFoundContext;
  export default {
    NotFound, NotFoundProps, NotFoundContext,
  } as {
    NotFound, NotFoundProps, NotFoundContext,
  };
  declare namespace __components {
    export interface NotFoundProps {
      className?: string;
      style?: {};
      text?: string;
    }

    interface NotFoundContext {
      muiTheme?: any;
    }

    export class NotFound extends React.PureComponent<NotFoundProps, any> {
      public static defaultProps: NotFoundProps;
      public static context: NotFoundContext;
      public static contextTypes: any;
    }
  }
}
