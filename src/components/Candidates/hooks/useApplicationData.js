import React, { setState, useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    candidate: []
  })

  const setCandidate = (candidate) => {
    setState((prev) => ({ ...prev, candidate: candidate }));
  };

  useEffect(() => {
    Promise.all([
      axios.get("/api/candidate/1/2"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        candidate: all
      }));
    });
  }, []);

  console.log(state)
  return { state, setCandidate };
}
