import React from 'react'
import Context from '../Context'

class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            canEditNews: false
        }
    }

    render() {
        return (
            <Context.Consumer>
                {
                    (Context) => {

                        return (

                            <main className="news_component">
                                <div className="col-12 ">
                                    <div className='col-6 df_jcsb'>
                                        {/* кнопка редактировать новости */}
                                        <button className="btn_Black col-2" onClick={() => {
                                            this.setState({ canEditNews: !this.state.canEditNews },
                                                () => console.log(this.state.canEditNews))
                                        }
                                        }>Edit</button>
                                        {/* кнопка добавить новости */}
                                        <button className='btn_Black col-2' onClick={() => {
                                            this.setState({ addNews: !this.state.addNews })
                                        }}>Add</button>

                                        <button className='btn_Black col-2' onClick={() => {
                                            Context.data.news = Context.data.news.reverse()
                                            this.forceUpdate()
                                        }}>Reverse</button>
                                    </div>

                                    {/* поле добавления новой новости */}
                                    {this.state.addNews ?
                                        <div className='df_col df_jcsb col-12 news_item'>
                                            <input className={"btn_Black col-4  news_input_add"} placeholder={new Date().toLocaleDateString()} />
                                            <input className={"btn_Black col-8  news_input_add"} placeholder={'Это заголовок новости №' + (Context.data.news.length + 1)} />
                                            <input className={"btn_Black col-8  news_input_add"} placeholder={'Это текст новости №' + (Context.data.news.length + 1) + '.'} />

                                            <button className='btn_Black col-2' onClick={() => {
                                                let new_News = {};

                                                new_News.date =
                                                    document.querySelectorAll('.news_input_add')[0].value = ' ' ?
                                                        document.querySelectorAll('.news_input_add')[0].placeholder
                                                        :
                                                        document.querySelectorAll('.news_input_add')[0].value

                                                new_News.title =
                                                    document.querySelectorAll('.news_input_add')[1].value = ' ' ?
                                                        document.querySelectorAll('.news_input_add')[1].placeholder
                                                        :
                                                        document.querySelectorAll('.news_input_add')[1].value

                                                new_News.text =
                                                    document.querySelectorAll('.news_input_add')[2].value = ' ' ?
                                                        document.querySelectorAll('.news_input_add')[2].placeholder
                                                        :
                                                        document.querySelectorAll('.news_input_add')[2].value

                                                new_News.id = Context.data.news.length + 1

                                                Context.data.news.push(new_News)

                                                this.setState({ addNews: !this.state.addNews })
                                            }}>Add</button>

                                        </div>
                                        :
                                        null}

                                    {/* все новости */}
                                    {Context.data.news.map((item, index) => {
                                        return (
                                            <div className="df_col df_jcsb col-12 news_item " key={item.id} >
                                                <div className="col-10  df_col ">



                                                    {this.state.canEditNews ?
                                                        <div className="df_col col-10 ">
                                                            <input className={"btn_Black col-2  news_input_id_" + item.id + ''} placeholder={item.date} />
                                                            <input className={"btn_Black col-8  news_input_id_" + item.id + ''} placeholder={item.title} />
                                                            <input className={"btn_Black col-8  news_input_id_" + item.id + ''} placeholder={item.text} />
                                                            {/* <p>id : {item.id}</p> */}

                                                            <div className="col-4 df_jcsb ">
                                                                <button className="btn_Black col-2" onClick={() => {
                                                                    // у новости у которой нажали сохранить
                                                                    let news = Context.data.news.filter(obj => obj.id === item.id)[0]
                                                                    //
                                                                    news.date = document.querySelectorAll('.news_input_id_' + item.id)[0].value
                                                                    news.title = document.querySelectorAll('.news_input_id_' + item.id)[1].value
                                                                    news.text = document.querySelectorAll('.news_input_id_' + item.id)[2].value
                                                                    // news.id = document.querySelectorAll('.news_input_id_' + item.id)[3].value

                                                                }}>Save</button>

                                                                {this.state.canEditNews ?
                                                                    <button className="btn_Black col-2"
                                                                        onClick={() => {
                                                                            // Context.data.news = Context.data.news.filter(obj => obj.id != item.id)
                                                                            Context.data.news = Context.data.news.filter(obj => obj.id !== item.id)
                                                                            //this.forceUpdate() для принудительной перерисовки компонента, т.к. state\props не менялись
                                                                            this.forceUpdate()
                                                                        }}
                                                                    >Delete</button>
                                                                    :
                                                                    null}
                                                            </div>
                                                        </div>
                                                        :
                                                        <div>
                                                            <p className="col-1 news_item_text">{item.date}</p>
                                                            <h3>{item.title}</h3>
                                                            <p className="col-10 news_item_text">{item.text}</p>
                                                            <p>id : {item.id}</p>
                                                        </div>
                                                    }

                                                </div>
                                            </div>
                                        )
                                    })}

                                </div>



                            </main>

                        )
                    }


                }

            </Context.Consumer>
        )
    }

}
export default News;
