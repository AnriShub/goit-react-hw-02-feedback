import React, { Component } from 'react';
import { Section } from "components/Section/Section.jsx";
import { Statistics } from "components/Statistics/Statistics.jsx";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions.jsx";
import { Notification } from "components/Notification/Notification.jsx";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = e => {
    const { name } = e.currentTarget;

    this.setState(prevState => ({
      [name]: prevState[name] + 1
    }))
  }

  countTotalFeedback = st => {
    const { good, neutral, bad } = st;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage(st) {
    const { good } = st;
    return Math.round(good / this.countTotalFeedback(st) * 100)
  }

  render() {

    const { good, neutral, bad } = this.state;
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: 'black',
      }}>
        <Section title="Please leave feedback" >
          <FeedbackOptions 
          options={this.state} 
          onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title="Statistics" >
          {this.countTotalFeedback(this.state) === 0 ?
            <Notification
              message="There is no feedback" /> :
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback(this.state)}
              positivePercentage={this.countPositiveFeedbackPercentage(this.state)} />
          }
        </Section>
      </div >
    )
  }
}



