import React from 'react'
import ReactToPrint from 'react-to-print'
//import cssIcon from '../assets/css.png'
//import html5Icon from '../assets/html5.png'

import {
  Grid,
  Button,
  Image,
  Header,
  Divider,
  List,
  Input,
  //Icon,
  Progress,
  Container
} from 'semantic-ui-react'
//////////////////////////////////////////////
import cv from '../cv/fsk_polish.js'
import headers from '../templates/polish.js'

class CV extends React.Component {
  render() {
    return (
      <Grid style={{
        width: '100%',
        height: '100%',
        padding: '0px',
        margin: '0px',
        backgroundImage: `linear-gradient(to top left, ${cv.layout.bgColor2}, ${cv.layout.bgColor1})`
      }}>
        <Grid.Row columns={2} style={{ padding: '0px', margin: '0px' }}>
          <Grid.Column style={{ padding: '12px 0px 12px 12px', margin: '0px' }} textAlign='center' width={6}>
            <Image
              src={cv.photo}
              style={{ borderRadius: '100px', height: '15%', border: `2px solid ${cv.layout.bgColor1}` }}
              centered
            />
            <List style={{ paddingLeft: '36px'}}>
              <List.Item>
                <List.Icon name='phone' />
                <List.Content>
                  {cv.phone}
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='mail' />
                <List.Content>
                  <a href={cv.mail}>{cv.mail}</a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='home' />
                <List.Content>
                  {cv.street}
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='world' />
                <List.Content>
                  {cv.city}
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='github' />
                <List.Content>
                  <a href={cv.github}>{cv.github}</a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='birthday cake' />
                <List.Content>
                  {cv.birthday}
                </List.Content>
              </List.Item>
            </List>

            <Divider horizontal>
              <Header content={headers.programming} />
            </Divider>
              <div style={{
                backgroundColor: cv.layout.bgColor1,
                padding: '12px',
                borderRadius: '16px',
                margin: '4px'
              }}>
                {this.renderWebDevSkills(cv, 6, 10)}
                {this.renderProgrammingLanguages(cv, 6, 10)}
                {this.renderFrameworks(cv, 6, 10)}
                {this.renderOtherSkills(cv, 6, 10)}
              </div>

            <Divider horizontal>
              <Header size='small' content={headers.languages} />
            </Divider>
            <List horizontal style={{ textAlign: 'center' }}>
              {cv.skills.languages.map((language, index) => {
                return (
                  <List.Item key={index}>
                    <List.Header size='small'>{language.title}</List.Header>
                    <List.Description>{language.description}</List.Description>
                  </List.Item>
                )
              })}
            </List>

            <Divider horizontal>
              <Header size='small' content={headers.certificates}/>
            </Divider>
            <List horizontal style={{ textAlign: 'center' }}>
              {cv.skills.certificates.map((certificate, index) => {
                return (
                  <List.Item key={index}>
                    <List.Header>{certificate.title}</List.Header>
                    <List.Description>{certificate.description}</List.Description>
                  </List.Item>
                )
              })}
            </List>
          </Grid.Column>



          <Grid.Column textAlign='left' style={{ padding: '0px', margin: '0px' }} width={10}>
            <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', width: '100%', height: '100%'}}>
              {this.renderRightColumn(cv)}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

  renderWebDevSkills = (cv) => {
    if(!cv.skills.webDev) return
    return (
      <div>
        <Divider horizontal>
          <Header content={headers.webDev} />
        </Divider>

        <List divided style={{ textAlign: 'left' }}>
          {cv.skills.webDev.map((skill, index) => {
            return (
              <List.Item key={index}>
                <List.Content>
                  <List.Header size='small'>{skill.title}</List.Header>
                  <List.Description content={skill.description} />
                </List.Content>
              </List.Item>
            )
          })}
        </List>
      </div>
    )
  }
  renderProgrammingLanguages = (cv, leftWidth, rightWidth) => {
    if(!cv.skills.programmingLanguages) return
    return (
      <div>
        <Divider horizontal>
          <Header size='small'  style={{ color: cv.layout.color2 }} content={headers.programmingLanguages} />
        </Divider>

        <Grid style={{ textAlign: 'right', margin: '0px', padding: '0px'}}>
            {cv.skills.programmingLanguages.map((skill, index) => {
              return (
                <Grid.Row key={index} columns={2} style={{ margin: '0px', padding: '0px'}} verticalAlign='middle'>
                  <Grid.Column width={leftWidth} style={{ margin: '0px', padding: '0px'}}>
                    <Header size='tiny' content={skill.title} style={{ color: cv.layout.color2 }} />
                  </Grid.Column>
                  <Grid.Column width={rightWidth}>
                    <Progress size='tiny' style={{ margin: '0'}} percent={skill.value} color='blue' />
                  </Grid.Column>
                </Grid.Row>
              )
            })}
        </Grid>
      </div>
    )
  }
  renderFrameworks = (cv, leftWidth, rightWidth) => {
    if(!cv.skills.frameworks) return
    return (
      <div>
        <Divider horizontal>
          <Header size='small' style={{ color: cv.layout.color2 }} content={headers.frameworks} />
        </Divider>

        <Grid style={{ textAlign: 'right', margin: '0px', padding: '0px'}}>
            {cv.skills.frameworks.map((skill, index) => {
              return (
                <Grid.Row key={index} columns={2} style={{ margin: '0px', padding: '0px'}} verticalAlign='middle'>
                  <Grid.Column width={leftWidth} style={{ margin: '0px', padding: '0px'}}>
                    <Header size='tiny' style={{ color: cv.layout.color2 }} content={skill.title} />
                  </Grid.Column>
                  <Grid.Column width={rightWidth}>
                    <Progress size='tiny' style={{ margin: '0'}} percent={skill.value} color='blue' />
                  </Grid.Column>
                </Grid.Row>
              )
            })}
        </Grid>
      </div>
    )
  }
  renderOtherSkills = (cv, leftWidth, rightWidth ) => {
    if(!cv.skills.other) return
    return (
      <div>
        <Divider horizontal>
          <Header  style={{ color: cv.layout.color2 }} size='small' content={headers.other} />
        </Divider>

        <Grid style={{ textAlign: 'right', margin: '0px', padding: '0px'}}>
            {cv.skills.other.map((skill, index) => {
              return (
                <Grid.Row key={index} columns={2} style={{ margin: '0px', padding: '0px'}} verticalAlign='middle'>
                  <Grid.Column width={leftWidth} style={{ margin: '0px', padding: '0px'}}>
                    <Header  style={{ color: cv.layout.color2 }} size='tiny' content={skill.title} />
                  </Grid.Column>
                  <Grid.Column width={rightWidth}>
                    <Progress size='tiny' style={{ margin: '0'}} percent={skill.value} color='blue' />
                  </Grid.Column>
                </Grid.Row>
              )
            })}
        </Grid>
      </div>
    )
  }
  renderRightColumn = (cv) => {
    return (
      <div style={{ position: 'relative', width: '100%', height: '100%', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, position: 'relative', padding: '4px', margin: '0px' }}>
          <Header content={cv.name} style={{ fontSize: '40px', paddingTop: '12px', color: cv.layout.header}} textAlign='center'/>
          <Divider horizontal>
            <Header content={this.props.position} style={{ color: cv.layout.color2}} size='large'/>
          </Divider>
          <Container textAlign='center'><p><i>{cv.quote}</i></p></Container>
        </div>
        {this.renderExperience(cv, 4, 12)}
        <div style={{ flex: 1, position: 'relative', marginBottom: '12px', padding: '12px' }}>
          <i>Wyrażam zgodę na przetwarzanie moich danych osobowych przez {this.props.company} w celu prowadzenia rekrutacji na aplikowane przeze mnie stanowisko.</i>
        </div>
      </div>
    )
  }
  renderExperience = (cv, leftWidth, rightWidth) => {
    return (
      <div style={{ flex: 100, position: 'relative' }}>
        <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'white', borderRadius: '12px 0px 0px 12px', border: '2px solid #CCC', padding: '12px'}}>
          <Divider horizontal style={{ padding: '0px 12px 12px 12px' }} >
            <Header style={{ color: cv.layout.color2 }} content={headers.experience} size='large' />
          </Divider>
          <Grid style={{ paddingRight: '12px' }}>
            {cv.experiences.map((experience, index) => {
              return (
                <Grid.Row columns={2} style={{ padding: '6px' }} key={index}>
                  <Grid.Column width={leftWidth}>
                    <List>
                      <List.Item>
                        <List.Content>
                          <List.Description>
                            {headers.from}: <b>{experience.startDate}</b>
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List>
                    <List>
                      <List.Item>
                        <List.Content>
                          <List.Description>
                            {headers.to}: <b>{experience.endDate}</b>
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={rightWidth} style={{ padding: '0px' }}>
                    <Header content={experience.title} style={{ margin: '0px' }}/>
                    <List style={{ padding: '6px', margin: '0px' }}>
                      <List.Item style={{ padding: '0px' }}>
                        <List.Content style={{ padding: '0px'}}>
                          <List.Description>
                            <List.Header content={headers.position} style={{ display: 'inline-block', padding: '0px'}} />: {experience.position}
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Description>
                            <List.Header content={headers.experience} style={{ display: 'inline-block'}} />: {experience.description}
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Description>
                            <List.Header content={headers.technologies} style={{ display: 'inline-block'}} />: {experience.technologies}
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List>
                  </Grid.Column>
                </Grid.Row>
              )
            })}
          </Grid>

          <Divider horizontal style={{ padding: '12px' }}>
            <Header style={{ color: cv.layout.color2 }} content={headers.education} size='large' />
          </Divider>
          <Grid>
            {cv.universities.map((uni, index) => {
              return (
                <Grid.Row columns={2} style={{ padding: '6px'}} key={index}>
                  <Grid.Column width={leftWidth}>
                    <List style={{ padding: '0px' }}>
                      <List.Item>
                        <List.Content>
                          <List.Description style={{ padding: '0px' }}>
                            {headers.from}: <b>{uni.startDate}</b>
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List>
                    <List style={{ padding: '0px' }}>
                      <List.Item>
                        <List.Content>
                          <List.Description style={{ padding: '0px' }}>
                            {headers.to}: <b>{uni.endDate}</b>
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={rightWidth} style={{ padding: '0px' }}>
                    <Header content={uni.title} style={{ padding: '0px', margin: '0px' }} />
                    <List style={{ padding: '6px', margin: '0px' }}>
                      <List.Item style={{ padding: '0px', margin: '0px' }}>
                        <List.Content>
                          <List.Description>
                            <b>{headers.course}: </b>{uni.course}
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List>
                  </Grid.Column>
                </Grid.Row>
              )
            })}
            {cv.secondary &&
              <Grid.Row columns={2} style={{ padding: '6px' }}>
                <Grid.Column width={leftWidth}>
                    <List style={{ padding: '0px' }}>
                      <List.Item>
                        <List.Content>
                          <List.Description>
                            {headers.from}: <b>{cv.secondary.startDate}</b>
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List>
                    <List>
                      <List.Item>
                        <List.Content>
                          <List.Description>
                            {headers.to}: <b>{cv.secondary.endDate}</b>
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List>
                </Grid.Column>
                <Grid.Column width={rightWidth}>
                  <Header content={cv.secondary.title} />
                  <List style={{ padding: '0px' }}>
                    <List.Item>
                      <List.Content>
                        <List.Description>
                          <b>{headers.advancedClasses}: </b>{cv.secondary.ac}
                        </List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Description>
                          <b>{headers.average}: </b>{cv.secondary.avg}
                        </List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Description>
                          <b>{headers.diploma}: </b>{cv.secondary.diploma}
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
            }
          </Grid>

          <Divider horizontal style={{ padding: '12px' }}>
            <Header style={{ color: cv.layout.color2 }} content={headers.projects} size='large' />
          </Divider>
          <Grid style={{ padding: '0px' }}>
            {cv.projects.map((project, index) => {
              return (
                <Grid.Row columns={2} key={index} style={{ padding: '6px' }} verticalAlign='top'>
                  <Grid.Column width={6} textAlign='center' verticalAlign='middle'>
                    <Image src={project.image} centered style={{ borderRadius: '16px', opacity: 0.9, bottom: 0, height: '70px' }} />
                    <a href={project.link}>{project.link}</a>
                  </Grid.Column>
                  <Grid.Column width={10} verticalAlign='top'>
                    <Divider horizontal style={{ margin: '0px' }}>
                      <Header size='medium' content={project.title} />
                    </Divider>
                    <List style={{ padding: '0px', margin: '0px' }}>
                      <List.Item>
                        <List.Content>
                          <List.Description>
                            {project.description}
                          </List.Description>
                          <List.Description>
                            <List.Header content={headers.technologies} style={{ display: 'inline-block'}} />: {project.technologies}
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List>
                  </Grid.Column>
                </Grid.Row>
              )
            })}
          </Grid>
        </div>
      </div>
    )
  }
}

/*{window.location.pathname.substring(1, window.location.pathname.length)}*/

class CVContainer extends React.Component {
  state={company: 'WYPEŁNIJ', position: 'Software Developer'}

  render() {
    return (
      <div style={{ padding: '12px'}}>
        <Input label='Company:' value={this.state.company} onChange={(e) => this.setState({ company: e.target.value })} />
        <Input label='Position:' value={this.state.position} onChange={(e) => this.setState({ position: e.target.value })} />
        <ReactToPrint
          trigger={() => <Button fluid color='red' content='Print'/>}
          content={() => this.cvRef}
          style={{ height: '100%', width: '100%' }}
        />
        <CV ref={el => this.cvRef = el} company={this.state.company} position={this.state.position} />
      </div>
    )
  }
}

export default CVContainer
