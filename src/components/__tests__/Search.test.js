import {render} from "@testing-library/react"
import Body from "../Body"
import { Provider } from "react-redux"
import store from "../../utils/store.js"
import { StaticRouter } from "react-router-dom/server"
import { REST_DATA } from "../../mocks/data"

global.fetch = jest.fn(()=> {
    return Promise.resolve({
        json: ()=>{Promise.resolve(REST_DATA);
        },
    })
})

test("Search Results on Homepage", () => {
    const body = render(
        <StaticRouter>
            <Provider store ={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    )
    const searchBtn = body.getByTestId("search-btn");
    console.log(searchBtn);
})