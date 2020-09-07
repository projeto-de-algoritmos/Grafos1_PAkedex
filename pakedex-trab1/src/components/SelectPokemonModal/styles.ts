import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  max-height: 500px;
  padding: 20px;
`;

export const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #fefefe;
  height: 500px;
  overflow-y: auto;
`;

export const Divider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1px;
  height: 100%;
  background-color: #dd412e;
`;

export const PokeRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

export const PokeTitle = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
`;

export const PokeDisplay = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65px;
  width: 65px;
  background-color: #edededed;
  border: 2px solid #dd412e;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
`;
