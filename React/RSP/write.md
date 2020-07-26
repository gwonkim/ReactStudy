render 성공적으로 시행될 때 -> componentDidMount()
컴포넌트가 제거될 때는 componentWillUnmount()

라이프 사이클 
 컴포넌트가 클라이언트 파일에서 불려와 렌더링 될 때
 렌더함수가 실행될 때 react가 jsx를 돔에 붙여주는데
 붙여주는 그 순간에 
 컴포넌트가 돔에 붙는 순간 특정한 동작 가능
 */

/* 
클래스의 경우
-> constructor/method -> render -> ref -> componentDidMount => 화면이 보여짐  
-> (setState/props 바꿜 때 -> shouldComponentUpdate -> render -> componentDidUpdate)

부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸




    
    비동기 함수가 
    밖에 있는 변수 적용 시 클로져 발생  



   this.interval = setInterval( () => {
    const { imgCoord} = this.state;

        if( imgCoord === rspCoords.바위) {
            this.setState( {
                imgCoord : rspCoords.가위,
            });
        } else if(imgCoord === rspCoords.가위) {
            this.setState( {
                imgCoord : rspCoords.보,
            });
        } else if (imgCoord === rspCoords.보) {
            this.setState( { 
                imgCoord : rspCoords.바위,
            });
        }
    }, 1000); 