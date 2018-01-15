import * as React from 'react';
import * as PropTypes from 'prop-types';


type IStyle = {
  root: React.CSSProperties;
  wrapper: React.CSSProperties;
  text: React.CSSProperties;
  /*4*/
  number1Stripe1: React.CSSProperties;
  number1Stripe2: React.CSSProperties;
  number1Stripe3: React.CSSProperties;
  /*0*/
  number2Stripe1: React.CSSProperties;
  number2Stripe2: React.CSSProperties;
  number2Stripe3: React.CSSProperties;
  number2Stripe4: React.CSSProperties;
  /*4*/
  number3Stripe1: React.CSSProperties;
  number3Stripe2: React.CSSProperties;
  number3Stripe3: React.CSSProperties;
};

const getStyle = function (props: IProps, context: IContext): IStyle {
  const numbersStyle: React.CSSProperties = {
    position: 'absolute',
    left: 0,
    top: 0,
    display: 'block',
    boxSizing: 'border-box',
    borderRadius: '2px',
    backgroundColor: context.muiTheme.appBar.color,
    boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
  };
  return {
    root: {
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'center',
      alignItems: 'center',

      width: '100%',
      height: '100%',
      ...(props.style ? props.style : {}),
    },
    wrapper: {
      position: 'relative',
      left: 0,
      top: 0,
      width: '340px',
      height: '240px',
      margin: '0 auto',
    },
    text: {
      position: 'absolute',
      top: '200px',
      left: 0,

      width: '340px',
      height: '40px',
      padding: '0 1rem',

      fontSize: '1.5rem',
      fontWeight: 'normal',
      textAlign: 'center',
      color: context.muiTheme.palette.primary1Color,
    },
    /*4*/
    number1Stripe1: {
      ...numbersStyle,

      left: '5px',
      width: '20px',
      height: '100px',
    },
    number1Stripe2: {
      ...numbersStyle,

      top: '75px',
      width: '110px',
      height: '20px',
    },
    number1Stripe3: {
      ...numbersStyle,

      left: '80px',
      width: '20px',
      height: '200px',
    },
    /*0*/
    number2Stripe1: {
      ...numbersStyle,

      left: '125px',
      width: '20px',
      height: '200px',
    },
    number2Stripe2: {
      ...numbersStyle,

      top: '5px',
      left: '120px',
      width: '105px',
      height: '20px',
    },
    number2Stripe3: {
      ...numbersStyle,

      top: '175px',
      left: '120px',
      width: '105px',
      height: '20px',
    },
    number2Stripe4: {
      ...numbersStyle,

      left: '200px',
      width: '20px',
      height: '200px',
    },
    /*4*/
    number3Stripe1: {
      ...numbersStyle,

      left: '245px',
      width: '20px',
      height: '100px',
    },
    number3Stripe2: {
      ...numbersStyle,

      top: '75px',
      left: '240px',
      width: '110px',
      height: '20px',
    },
    number3Stripe3: {
      ...numbersStyle,

      left: '320px',
      width: '20px',
      height: '200px',
    },
  };
};

interface IContext {
  muiTheme?: any;
}

interface IProps {
  className?: string;
  style?: {};
  text?: string;
}

export class NotFound extends React.PureComponent<IProps, any> {
  public displayName: string = 'NotFound';
  public static defaultProps = {
    className: '',
    style: {},
    text: 'Page was not found.',
  };
  public context: IContext;
  public static contextTypes = {
    muiTheme: PropTypes.object,
  };

  public render() {
    const style = getStyle(this.props, this.context);
    return (
      <div
        className={this.props.className ? this.props.className : ''}
        style={style.root}
      >
        <div style={style.wrapper}>
          <div style={style.number1Stripe1}></div>
          <div style={style.number1Stripe2}></div>
          <div style={style.number1Stripe3}></div>
          <div style={style.number2Stripe1}></div>
          <div style={style.number2Stripe2}></div>
          <div style={style.number2Stripe3}></div>
          <div style={style.number2Stripe4}></div>
          <div style={style.number3Stripe1}></div>
          <div style={style.number3Stripe2}></div>
          <div style={style.number3Stripe3}></div>
          <p style={style.text}>{this.props.text}</p>
        </div>
      </div>
    );
  }
}
