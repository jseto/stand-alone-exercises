
// const board = new Array( 3 ).fill( new Array( 3 ).fill( 0 ) )

function createBoard( size ) {
	const rows = []
	for( let i=0; i<size; i++ ) {
		const column = []
		for( let j=0; j<size; j++ ) {
			column.push( 0 )
		}
		rows.push( column )
	}
	return rows
}

function getRandomInteger( maxRandom ) {
	return Math.floor( Math.random() * maxRandom )
}

function findEmptySpaces( board ) {
	const emptySpaces = []
	const size = board.length

	for ( let i = 0; i<size; i++){
		for ( let j = 0; j<size; j++){
			if ( board[i][j] === 0 ) {
				emptySpaces.push({
					x: i,
					y: j
				})
			}
		}
	}
	return emptySpaces
}

function placeMark( board, player ) {
	const emptySpaces = findEmptySpaces( board )
	const posIndex = getRandomInteger( emptySpaces.length )
	const position = emptySpaces[ posIndex ]
	board[ position.x ][ position.y ] = player
}

function check3inARow( board, row ) {
	// if ( board[row][0] === 0 ) return false
	// board = [
	// 	[1,1,1],
	// 	[0,0,0],
	// 	[0,0,0]
	// ]
	const playerInFirstRow = board[row][0]
	const size = board.length

	let i = 1
	while( i<size && board[ row ][ i ] === playerInFirstRow) {
		i++
	}

	if ( i >= 3 ) {
		return playerInFirstRow
	}
	else return 0
}

function check3inAColumn( board, column ) {
	// if ( board[0][column] === 0 ) return false
	const playerInFirstColumn = board[0][column]
	const size = board.length

	let i = 1
	while( i<size && board[ i ][ column ] === playerInFirstColumn ) {
		i++
	}

	if ( i >= 3 ) {
		return playerInFirstColumn
	}
	else return 0
}

function check3inDownwardDiagonal( board ) {
	const playerInCorner = board[0][0]
	const size = board.length

	let i = 1
	while( i<size && board[i][i] === playerInCorner ) {
		i++
	}

	if ( i >= 3 ) {
		return playerInCorner
	}
	else return 0
}

function check3inUpwardDiagonal( board ) {
	const size = board.length
	const playerInCorner = board[0][size]

	let i = 1
	while( i<size && board[i][size-i] === playerInCorner ) {
		i++
	}

	if ( i >= 3 ) {
		return playerInCorner
	}
	else return 0
}

function checkWinner( board ) {
	let winner = 0
	const size = board.length

	for( let i = 0; i < size; i++ ) {
		winner = check3inAColumn( board, i )
		if ( !winner ) {
			winner = check3inARow( board, i )
		}
		if (winner ) break
	}

	if ( !winner ) {
		winner = check3inDownwardDiagonal( board )
	}

	if ( !winner ) {
		winner = check3inUpwardDiagonal( board )
	}

	return winner
}

function playGame( firstPlayer, boardSize ) {
	let currentPlayer = firstPlayer
	let winner = 0
	let step = 0
	
	const board = createBoard( boardSize )
	let maxSteps = board.length * board.length

	while ( !winner && step++ < maxSteps ) {
		placeMark( board, currentPlayer )
		winner = checkWinner( board )
		// console.log( currentPlayer, step, board )
		currentPlayer = currentPlayer === 1? 2 : 1
	}


	return {
		winner, board
	}
}


const result = playGame( 1, 3 )
console.log( 'And the winner is...: ', result.winner )

result.board.forEach( row => console.log( row ) ) 
