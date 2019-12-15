"use strict";

const chess = {
    gameContainer: document.getElementById('chess'),
    renderField(){
        const rows = [0,8,7,6,5,4,3,2,1,9];
        const cols = [0,'A','B','C','D','E','F','G','H',9];
        for ( let i=0; i<rows.length; i++){
            for (let j=0; j<cols.length; j++){
                let cell= document.createElement('div');
                cell.style.width = '50px';
                cell.style.height = '50px';
                cell.style.cssFloat = 'left';

                this.gameContainer.appendChild(cell);

                if ((rows[i] ===0||rows[i] ===9) && (cols[j]!==0 && cols[j]!==9)){
                    cell.innerHTML=(cols[j]);
                    this.fieldsStyling(cell,i,j);
                }
                if ((cols[j] ===0||cols[j] ===9) && (rows[i]!==0 && rows[i]!==9)){
                    cell.innerHTML=(rows[i]).toString();
                    this.fieldsStyling(cell,i,j);
                }
                this.GameCellsStyling(cell,i,j);

            }
        }
    },
    fieldsStyling(cell,i,j){
        cell.style.textAlign='center';
        cell.style.lineHeight='50px';
        cell.style.fontSize='20px';
        if (i===0 || j===9){
            cell.style.transform='rotate(180deg)';
        }
    },
    GameCellsStyling(cell,i,j){
         if ((i>0&&j>0&&i<9&&j<9)&&(i+j)%2!==0) {
            cell.style.backgroundColor='black';
            cell.style.outlineStyle='solid';
            cell.style.outlineWidth='1px';
            cell.style.outlineColor='black';
        }
        else if ((i>0&&j>0&&i<9&&j<9)&&(i+j)%2===0) {
            cell.style.backgroundColor='#e1e1e1';
            cell.style.outlineStyle='solid';
            cell.style.outlineWidth='1px';
            cell.style.outlineColor='black';
        }
    }
};
chess.renderField();