import * as types from "./Actiontypes";

const initialstate = {
  records: [],
  loading: false,
  error: null,
};

const Reducer = (state = initialstate, action) => {
  let date = new Date();
  switch (action.type) {
    case types.LOAD_RECORDS_START:
      console.log(state)
      return {
        ...state,
        loading: true,
      };
    case types.ADD_RECORDS:
      console.log(state.records);
      console.log(action.payload);
      date =
        date.getDate() +
        "-" +
        (date.getMonth() + 1) +
        "-" +
        date.getFullYear() +
        "-" +
        date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds();
      return {
        ...state,
        records: [
          ...state.records,
          { ...action.payload, createdOn: date, updatedOn: "-",updatedby:"-",answeredby:"-", Status: "New" },
        ],
      };
    case types.UPDATE_RECORDS:
      date =
        date.getDate() +
        "-" +
        (date.getMonth() + 1) +
        "-" +
        date.getFullYear() +
        "-" +
        date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds();
      const updateRecords = state.records.map((item) =>
        item.id === action.payload.id
          ? { ...item, ...action.payload, Status: "Completed", updatedOn: date }
          : item
      );
      console.log(state.records, action.payload);

      return {
        ...state,
        records: updateRecords,
      };

    default:
      return {
        ...state,
      };
  }
};
export default Reducer;
