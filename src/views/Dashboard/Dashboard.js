import React, { Component} from 'react';
import { DEVICES,options,line} from './../../constants'
import { Bar, Line } from 'react-chartjs-2';
import classnames from 'classnames';
import {
  Button,ButtonGroup,TabPane,Nav,NavItem,Card,CardBody,CardHeader, Col,NavLink,TabContent,Pagination,PaginationItem,PaginationLink,FormGroup,Label, Row,Table,InputGroup, InputGroupAddon,  Input, InputGroupText
} from 'reactstrap';
class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      activeTab: new Array(4).fill('1'),
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  toggle(tabPane, tab) {
    const newArray = this.state.activeTab.slice()
    newArray[tabPane] = tab
    this.setState({
      activeTab: newArray,
    });
  }
  
  tabPane() {
    return (
      <>
        <TabPane tabId="1">
          {   
          <Card>
            <CardHeader>
              Line Chart
              <div className="card-header-actions">
                <a href="http://www.chartjs.org" className="card-header-action">
                  <small className="text-muted">docs</small>
                </a>
              </div>
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
                <Line data={line} options={options} />
              </div>
            </CardBody>
          </Card>}
        </TabPane>
        <TabPane tabId="2">
          {<Card>
            <CardHeader>
              Ultima Ubicación del Dispositivo:
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
              Tipo de Seguimiento:
              <Col  md="9">
              <FormGroup check inline>
              MAPA
              </FormGroup>
              </Col>
              <Col  md="9">

                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="option1" />
                        <Label className="form-check-label" check htmlFor="inline-radio1">1</Label>
                      </FormGroup>
                      </Col>
                  <Col  md="9">
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="option1" />
                        <Label className="form-check-label" check htmlFor="inline-radio1">2</Label>
                      </FormGroup>
                      </Col>
                  <Col  md="9">
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="option1" />
                        <Label className="form-check-label" check htmlFor="inline-radio1">3</Label>
                      </FormGroup>
                      </Col> 
                      <Row>
                        <div>Recorrido: aqui la base de datos envia el Recorrido que ha ejercido el Dispositivo
                        </div>
                        <Col col="2" className="mb-3 mb-xl-0 text-center">
                          <Button color="primary" size="lg">Guardar</Button>
                        </Col>
                     </Row>             
              </div>
            </CardBody>
          </Card>}
        </TabPane>
        <TabPane tabId="3">
          {<Card>
            <CardHeader>
                  Seguimiento del Dispositivo
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
              <Col  md="9">
              <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Seleccionar Dispositivo</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="select">
                        <option value="0">Seleccionar</option>
                        <option value="1">G123</option>
                        <option value="2">P123</option>
                        <option value="3">S123</option>
                      </Input>
                    </Col>
                  </FormGroup>
                      </Col>
                      <FormGroup row>
                  <Col  md="9">
                      Mapa
                      </Col>
                      </FormGroup>
                      <Col  md="9">
              <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Configuarar Valor Dispositivo </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="select">
                        <option value="0">Seleccionar</option>
                        <option value="1">1-30</option>
                        <option value="2">30-60</option>
                        <option value="3">60-100</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>Rangos:</FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Rango 1 </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="select">
                        <option value="0">Seleccionar</option>
                        <option value="1">1-30</option>
                        <option value="2">30-60</option>
                        <option value="3">60-100</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                  <Col md="3">
                      <Label htmlFor="select">Rango 2 </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="select">
                        <option value="0">Seleccionar</option>
                        <option value="1">1-30</option>
                        <option value="2">30-60</option>
                        <option value="3">60-100</option>
                      </Input>
                    </Col>
                    </FormGroup>
                    <FormGroup>
                    <Col md="3">
                      <Label htmlFor="select">Rango 3 </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="select">
                        <option value="0">Seleccionar</option>
                        <option value="1">1-30</option>
                        <option value="2">30-60</option>
                        <option value="3">60-100</option>
                      </Input>
                    </Col>
                    </FormGroup>
                      </Col> 
                      <Row>
                        <Col col="2" className="mb-3 mb-xl-0 text-center">
                          <Button color="primary" size="lg">Visualizar Cambios</Button>
                        </Col>
                     </Row>             
              </div>
            </CardBody>
          </Card>}
        </TabPane>
      </>
    );
  }
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  render() {

    const devices = DEVICES.map( (device) => {
      return(
        <tr>      
          <td>{device.codigo}</td>
          <td>{device.tipo}</td>
          <td>{device.date}</td>
          <td>
          <Input
            defaultValue = {device.status}
            type="select"
            name="ccmonth"
            id="ccmonth">
                        <option value="ACTIVE">ACTIVE</option>
                        <option value="INACTIVE">INACTIVE</option>
            </Input>
          </td>
          <td><button>Visualizar</button></td>
        </tr>
      )
    })

    return (
      <div className="animated fadeIn">

    <Row className="justify-content-center">
      <Col md="0">
      <CardBody>
                <ButtonGroup size="lg" >
                <Col sm xs="12" className="text-center mt-3">
                <Button color="ghost-success" >
                <i className="cui-list icons font-2xl d-block mt-4"></i>Registrar
                </Button>
              </Col>
                 <Col sm xs="12" className="text-center mt-3">
                <Button color="ghost-success">
                <i className="cui-basket-loaded icons font-2xl d-block mt-4"></i>Comprar
                </Button>
              </Col>
                </ButtonGroup>
                </CardBody>
                </Col>
      </Row>
    <Row>
          <Col xs="12" lg="0">
            <Card>
              <CardHeader>
          Tabla de Dispositivos
              </CardHeader>
              <CardBody>
              <Col md="6">
      <InputGroup> 
                      <InputGroupAddon addonType="prepend"><InputGroupText> 
                  <i className="cui-magnifying-glass icons font-1xl d-block mt-1"></i>
                </InputGroupText>  </InputGroupAddon>
                      <Input placeholder="Buscar" />  <Button color="info">Buscar</Button>
                    </InputGroup>
                    </Col>
                <Table responsive>
                  <thead>
                  <tr>
                    <th>codigo</th>
                    <th>Tipo</th>
                    <th>Date registered</th>
                    <th>Status</th>
                    <th>Visualizar</th>
                  </tr>
                  </thead>
                  <tbody>
                
                  { devices }
                 
                  </tbody>
                </Table>
                <Pagination >
                  <PaginationItem>
                    <PaginationLink previous tag="button"></PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next tag="button"></PaginationLink>
                  </PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>           
        </Row>
        <Row >     
        <Col xs="10" lg="0" className="mb-4">
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[2] === '1'}
                  onClick={() => { this.toggle(2, '1'); }}
                >
                  <i className="icon-calculator"></i> <span className={this.state.activeTab[2] === '1' ? '' : 'd-none'}> Modulo</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[2] === '2'}
                  onClick={() => { this.toggle(2, '2'); }}
                >
                  <i className="icon-basket-loaded"></i> <span
                  className={this.state.activeTab[2] === '2' ? '' : 'd-none'}>Seguimiento</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab[2] === '3' })}
                  onClick={() => { this.toggle(2,'3'); }}
                >
                  <i className="icon-pie-chart"></i> <span className={this.state.activeTab[2] === '3' ? '' : 'd-none'}> Valor en Mapa</span>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab[2]}>
              {this.tabPane()}
            </TabContent>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>Registrar Producto</strong>
  
              </CardHeader>
              <CardBody>
               
                <Row>
                  <Col xs="12">
                    <FormGroup>
                    <strong>Tipo de Modulo:</strong>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="ccnumber">
                      G:Seguimiento</Label>
                     </FormGroup>  
                     <FormGroup>
                      <Label htmlFor="ccnumber">
                      P:Valor en Mapa</Label>
                      </FormGroup>  
                      <FormGroup> 
                      <Label htmlFor="ccnumber">
                      M:Modulo</Label>
                      </FormGroup>
                      <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="ccmonth">Id(codigo)*</Label>
                      <Input type="select" name="ccmonth" id="ccmonth">
                        <option value="G">G</option>
                        <option value="P">P</option>
                        <option value="M">M</option>
                      </Input>
                      
                    </FormGroup>
                  </Col >
                  <Input type="text" id="ccnumber" placeholder="0000 0000 0000 0000" required />
                  <Col  md="9">
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="option1" />
                        <Label className="form-check-label" check htmlFor="inline-radio1">Habilitar</Label>
                      </FormGroup>
                      </Col>
                  </Col>
                  <Col col="2" className="mb-3 mb-xl-0 text-center">
                <Button color="primary">Enviar</Button>
                </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
         
        </Row>
        
      </div>
    );
  }
}

export default Dashboard;