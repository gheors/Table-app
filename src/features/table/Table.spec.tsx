import { Box } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { makeStore } from "../../store";
import NumberInputComponent from "./components/inputs/NumberInputComponent";
import TableComponent from "./components/table/TableComponent";
import Title from "./components/text/Title";

describe("<Title/>", () => {
  it("renders the component", () => {
    const store = makeStore();

    render(
      <Provider store={store}>
        <Box>
          <Title text={"Table test title"} />
        </Box>
      </Provider>
    );
    expect(screen.getByText("Table test title")).toBeInTheDocument();
  });

  // other tests
});

describe("<TableComponent/>", () => {
  it("renders the component", () => {
    const store = makeStore();
    render(
      <Provider store={store}>
        <TableComponent
          headCellsText={["Origin values", "Offset", "Mult"]}
          caption="Table full features are grouped here."
          editable={true}
          showThirdColumn={true}
        />
      </Provider>
    );
    const caption = screen.getByText("Table full features are grouped here.");
    expect(caption).toBeInTheDocument();

    const originValues = screen.queryAllByText("Origin values");
    expect(originValues).toHaveLength(2);

    const offset = screen.queryAllByText("Offset");
    expect(offset).toHaveLength(2);

    const mult = screen.queryAllByText("Mult");
    expect(mult).toHaveLength(2);

    const occurrences = screen.getAllByText(0);
    expect(occurrences.length).toBe(10);
  });

  // other tests
});

describe("<NumberInputComponent/>", () => {
  it("renders the component", () => {
    const store = makeStore();
    render(
      <Provider store={store}>
        <NumberInputComponent />
      </Provider>
    );

    const inputField = screen.getByDisplayValue("0");
    expect(inputField).toBeInTheDocument();
  });

  // other tests
});

//other tests
