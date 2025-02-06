import { Header1 } from "../constant/links"

const Header = () => {
  return (
    <div>
          <div>Logo</div>
          <div>
              <ul>
                  {Header1.map((item,index) => {
                      return (
                          <li key={index}>
                              {item?.title}
                            </li>
                        )
                })}
              </ul>
          </div>
    </div>
  )
}

export default Header
