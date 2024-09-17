# Emmets

Emmets that were being used for this chess project.

## Table of Contents
- [Emmets](#emmets)
  - [Table of Contents](#table-of-contents)
  - [Chess Board](#chess-board)

## Chess Board

### Template 1

```
- (DIV) Container
    - (DIV) Chess Board
        - (UL) Row * 8
            - (LI) Cell * 8
```
```css
(.container>.chess-board>((ul.chess-board-row[cell-row=$]>li.chess-board-cell[cell-col=$]*8)*8))*1
```

### Template 2

```
- (DIV) Container
    - (DIV) Chess Board
        - (UL) Row * 8
            - (LI) Cell * 8
                - (SPAN) Piece
```
```css
(.container>.chess-board>((ul.chess-board-row[cell-row=$]>(li.chess-board-cell[cell-col=$]>span.piece)*8)*8))*1
```