import {Component} from "react";

class Content extends Component {
    render() {
        return (
            <article>
                <h2>intro</h2>
                <p>react 특징 컴포넌트 기반</p>
                <ol>
                    <li>가독성</li>
                    <li>재사용성</li>
                    <li>유지보수</li>
                </ol>
                <h2>install</h2>
                <p>npm/npx 을 이용하여 create-react-app 설치</p>
                <ul>
                    <li>npm - nodejs 프로그램 (영구설치)</li>
                    <li>npx  - 임시로 설치해서 삭제하고 사용할때마다 다시 다운하여 늘 최신상태 유지</li>
                </ul>
                <h2>coding & run</h2>
                <ol>
                    <li>init : cmd에서 create-react-app 실행하면 실행위치 폴더에 자동 세팅</li>
                    <li>coding : src폴더의 하위파일 코드편집</li>
                    <li>run : npm run start</li>
                </ol>
                <h2>deploy</h2>
                <p>원본을 그대로 배포하면 파일용량이 크고 보안문제가 있음</p>
                <ol>
                    <li>​npm run build 명령 : build 폴더 안에 용량이 줄어든 코드파일 자동생성</li>
                    <li>npm install -g serve : 서브설치 (npm을 통해 설치가능한 간단한 웹서버)</li>
                    <li>serve -s build : 서브를 실행시킬때 build 디렉토리를 루트로 하겠다</li>
                </ol>
            </article>
        );
    }
}

export default Content;