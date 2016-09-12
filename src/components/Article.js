import React from 'react'
import { Card, CardHeader, CardText } from 'material-ui/Card'

const styles = {
  card: {
    width: '100%',
    margin: '8px 0',
  },
  cardTitle: {
    fontSize: '130%',
    fontFamily: 'Fira Mono',
  },
  link: {
    textDecoration: "none",
    width: "100%"
  }
}

const Article = ({ article }) => (
  <a href={article.link} style={styles.link}>
    <Card style={styles.card}>
      <CardHeader
        titleStyle={styles.cardTitle}
        title={article.title}
      />
      <CardText>
        {article.description}
      </CardText>
    </Card>
  </a>
)

export default Article
