import { Space, Table, Tag } from "antd";
import FormItemLabel from "antd/es/form/FormItemLabel";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
const columns = [
  {
    title: "News details",
    dataIndex: "newsDetails",
    key: "newsDetails",
    width: 360,
    render: (text) => {
      return (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ marginRight: 8, marginTop: -10 }}>
            <img
              src={text.image}
              alt="title"
              style={{
                width: 85,
                height: 85,
                objectFit: "contain",
                borderRadius: 20,
              }}
            />
          </div>
          <div style={{ alignSelf: "flex-start" }}>
            <p style={{ fontWeight: "bold", marginBottom: -2 }}>{text.title}</p>
            <p>{text.description.slice(0, 67)}....</p>
          </div>
        </div>
      );
    },
  },
  {
    title: "Categories",
    dataIndex: "category",
    key: "category",
    width: 180,
    render: (text) => {
      return (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {text?.map((item) => {
            return (
              <div
                key={item}
                style={{
                  backgroundColor: "#F4F4F4",
                  color: "#666666",
                  margin: 2,
                  borderRadius: 8,
                  padding: 4,
                  fontSize: 12,
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
      );
    },
  },
  {
    title: "Views",
    dataIndex: "views",
    key: "views",
    sorter: {
      compare: (a, b) => a.views - b.views,
      multiple: 3,
    },
  },
  {
    title: "Written date",
    key: "writtenDate",
    dataIndex: "writtenDate",
    width: 170,
    render: (text) => {
      return (
        <div style={{ fontSize: 12 }}>
          {text.split("T")[0]}
          <span style={{ color: "grey" }}>
            {" "}
            <br />
            at{" "}
          </span>
          {text.split("T")[1].slice(0, 5)}
          {text.split("T")[1].slice(0, 2) > 12 ? " PM" : " AM"}
        </div>
      );
    },
  },
  {
    title: "Written by",
    dataIndex: "writtenBy",
    key: "writtenBy",
    width: 200,
    render: (text) => {
      return <p>{text.charAt(0).toUpperCase() + text.slice(1)}</p>;
    },
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "3px 7px",
            borderRadius: 4,
          }}
        >
          <FiEdit />
        </a>
        <a>
          <AiFillDelete style={{ color: "red", fontSize: 18 }} />
        </a>
      </Space>
    ),
  },
];

const News = () => {
  const [data, setData] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
          console.log(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  const getData = async () => {
    const response = await axios.get("http://localhost:5000/api/v1/news");
    const data = response.data.data;
    const newData = data.map((item) => {
      return {
        ...item,
        newsDetails: {
          title: item.title,
          image: item.imageUrl,
          description: item.description,
        },
      };
    });
    setData(newData);
  };

  return <Table columns={columns} dataSource={data} />;
};
export default News;
