import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('contentList')
@observer
export default class ContentListView extends React.Component {
    componentWillMount() {
        this.props.contentList.fetch();
    }
    render() {
        return (
            <section>
                <h3>contents</h3>
                <ul>
                    {this.props.contentList.contents.map((each, i) => {
                        return <li key={`cl_${i}`}><a target="_blank" href={each.url}>{each.title}</a></li>
                    })}
                </ul>
            </section>
        );
    }
}