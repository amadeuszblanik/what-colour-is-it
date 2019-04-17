import Link from 'next/link'
import styles from '../styles/main.scss';

class Hours extends React.Component {
  constructor(props) {
    super(props);
  }

  showTime(time) {
    return ('0'  + time).slice(-2);
  }

  render() {
    return(
      <div ref={this.refHours} className={styles.clockTime}>
        <span>
          {this.showTime(this.props.time)}
        </span>
      </div>
    )
  }
}

class Minutes extends React.Component {
  constructor(props) {
    super(props);
  }

  showTime(time) {
    return ('0'  + time).slice(-2);
  }

  render() {
    return(
      <div className={styles.clockTime}>
        <span>
          {this.showTime(this.props.time)}
        </span>
      </div>
    )
  }
}

class Seconds extends React.Component {
  constructor(props) {
    super(props);
  }

  showTime(time) {
    return ('0'  + time).slice(-2);
  }

  render() {
    return(
      <div className={styles.clockTime}>
        <span>
          {this.showTime(this.props.time)}
        </span>
      </div>
    )
  }
}

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds(),
      r: 0,
      g: 0,
      b: 0,
      lum: 50
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds()
      })

      this.setState({
        r: parseInt(this.state.hours / 24 * 255),
        g: parseInt(this.state.minutes / 60 * 255),
        b: parseInt(this.state.seconds / 60 * 255),
      })

      this.setState({
        lum: 0.2126 * this.state.r + 0.7152 * this.state.g + 0.0722 * this.state.b
      })

      if (this.state.lum <= 40) {
        document.body.style.color = "#fafafa";
      } else {
        document.body.style.color = "#212121";
      }

      document.body.style.background = "rgb(" + this.state.r + ", " + this.state.g + ", " + this.state.b + ")"
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div>
        <main className={styles.clock}>
          <Hours time={this.state.hours} />
          <Minutes time={this.state.minutes} />
          <Seconds time={this.state.seconds} />
        </main>

        <section className={styles.colour}>
          <h1>color: rgb(<span>{this.state.r}, {this.state.g}, {this.state.b})</span></h1>
        </section>

        <footer className={styles.copyright}>
          2019 &copy; <a href="https://blanik.me/">Blanik.me</a>
        </footer>
      </div>
    )
  }
}

export default Index
