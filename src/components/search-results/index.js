import React from 'react';
import './search-results.scss';
import InventoryForm from '../inventory/index';
import AutoComplete from 'material-ui/AutoComplete';
import {GridList, GridTile} from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSet: null,
    };
    this.handelBatchSort = this.handelBatchSort.bind(this);
    this.handelLocationSort = this.handelLocationSort.bind(this);
    this.handelBlockSort = this.handelBlockSort.bind(this);
  }

  handelLocationSort(transactions) {
    const locSort = this.props.transactions.sort((a, b) => a.currentLocation - b.currentLocation);
    this.setState({ dataSet: locSort });
  }

  handelBlockSort(transactions) {
    const blockSort = this.props.transactions.sort((a, b) => a.blockNumber - b.blockNumber);
    this.setState({ dataSet: blockSort });
  }

  handelBatchSort(transactions) {
    const batchSort = this.props.transactions.sort((a, b) => a.batchId - b.batchId);
    this.setState({ dataSet: batchSort });
  }

  render() {
    const style = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        overflowY: 'auto',
        fontFamily: 'Source Serif Pro',
        borderColor: '#174266',
        marginTop: '50px',
      },
      gridTile: {
        border: '#174266',
        fontFamily: 'Pontano Sans, sans-serif',
      },
    };
    return (
      <div className='search-results'>
        <div className='sorting-buttons'>
          <h2>
            <span> Sort By </span>
            
            
            <RaisedButton
              label='Block'
              style={{ display: 'inline-block', marginLeft: '10px' }}
              onClick={() => this.handelBlockSort(this.state.dataSet)}
            />

            <RaisedButton
              label='Batch'
              style={{ display: 'inline-block', marginLeft: '20px' }}
              onClick={() => this.handelBatchSort(this.state.dataSet)}
            />

            <RaisedButton
              label='Location'
              style={{ display: 'inline-block', marginLeft: '20px', marginRight: '10px' }}
              onClick={() => this.handelLocationSort(this.state.dataSet)}
            />

          </h2>
        </div>
        <GridList 
          cols={1} 
          padding={1} 
          cellHeight={50} 
          style={style.gridList}>
          {this.props.transactions.map(transaction => {
            return (
              <GridTile
                rows={2}
                cols={1}
                key={transaction.id}
                title={this.props.transactions.From}
                style={{ fontFamily: ', sans-serif' }}
              >
                <div className='transaction-content'>
                  <ul className='search-ul' style={{ listStyle: 'none', display: 'inline-block' }}>
                    <li>Block: {transaction.blockNumber}</li>
                    <li>Batch ID: {transaction.batchId}</li>
                    <li>Location: {transaction.currentLocation}</li>
                    <li>Do not sell: {transaction.regulatorWarnings}</li>
                    <li>TS: {transaction.lastUpdated}</li>
                  </ul>
                </div>
              </GridTile>
            );
          })}
        </GridList>
      </div>
    );
  }
}

export default SearchResults;
