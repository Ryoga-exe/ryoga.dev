import React from 'react';

type propTypes = {
  birthday: string;
};

class Age extends React.Component<{ birthday: string }, { age: number }> {
  private birthday;
  private animationRequestId: any;

  static calc(birthday: string) {
    const dateToday = new Date();
    const dateBirthday = new Date(birthday);
    const diffYear = dateToday.getFullYear() - dateBirthday.getFullYear();

    dateBirthday.setFullYear(dateToday.getFullYear());
    const YEAR_AS_MS = 1000 * 60 * 60 * 24 * (new Date(dateToday.getFullYear(), 2, 0).getDate() === 29 ? 366 : 365);

    const diffTime = (dateToday.getTime() - dateBirthday.getTime()) / YEAR_AS_MS;
    const res = diffYear + diffTime;

    return res;
  }
  constructor(props: propTypes) {
    super(props);
    this.birthday = props.birthday;
    this.state = {
      age: Age.calc(props.birthday),
    };
  }
  componentDidMount = () => {
    this.update();
  };
  componentWillUnmount = () => {
    window.cancelAnimationFrame(this.animationRequestId);
  };

  update = () => {
    this.setState({
      age: Age.calc(this.birthday),
    });
    this.animationRequestId = window.requestAnimationFrame(this.update);
  };

  render = () => {
    const { age } = this.state;

    const [x, y] = age.toFixed(9).split('.'); // x.y
    return (
      <React.Fragment>
        <span>
          {x}.<span css={{ fontSize: '0.75rem' }}>{y}</span>
        </span>
      </React.Fragment>
    );
  };
}

export default Age;
