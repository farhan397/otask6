import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import HomeContainer from "../containers/HomeContainer";
import Searchbar from "../Header/Searchbar";
import HeaderContainer from "../containers/HeaderContainer";
const RecipeList = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterarray, setfilterarray] = useState(data);

  useEffect(() => {
    // axios.get('https://api.spoonacular.com/recipes/complexSearch?number=200&apiKey=b7d39b3568634b9d8d25e54da15d5dfe')
    axios
      .get(
        "https://api.spoonacular.com/recipes/complexSearch?number=200&apiKey=2f9b03d8174241c79727ee0a734df1c0"
      )
      .then(response =>{setData(response.data.results);
        setfilterarray(response.data.results)
          })
         .catch(error => console.log(error));
  }, []);

  const setfilter = (props) => {
    const filteredUser = data.filter((item) => {
      return item.title === props;
    });
    setfilterarray(filteredUser);
  };
  const handleSearch = (e) => {
    
    e.preventDefault();
    const filteredUser = data.filter((item) => {
      return (
        item.title === searchQuery
      );
    })
   
    setfilterarray(filteredUser);
    console.log(filterarray)
  };
  return (
    <>
      {/*  */}

      <div
        style={{
          display: "flex",
          height: "2%",
          backgroundColor: "rgb(208, 247, 232)",
          justifyContent:"center",
          alignItems:"center",
          margin:'1%',
          paddingRight:'10px'
        }}
      >
        <Container
          className="my-3"
          style={{
            width: "25%",
          }}
        >
          <Row>
            <Col>
              <Form onSubmit={handleSearch}>
                <Form.Group
                  className="d-flex"
                  style={{
                    backgroundColor: "rgb(73, 214, 160)",
                    padding: "5px",
                  }}
                >
                  <input
                    className="form-control me-2"
                    type="text"
                    placeholder="Enter Title"
                    aria-label="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  ></input>
                  <Button
                    variant="outline-success"
                    type="submit"
                    style={{
                      backgroundColor: "white",
                    }}
                  >
                    Search
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row></Row>
        </Container>
        <HeaderContainer />
      </div>
    

      <div
        className="parentContainer"
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "1px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {filterarray.map((card, index) => (
          <Card item={card} key={index} />
        ))}
      
      </div>
    </>
  );
};

export default RecipeList;
