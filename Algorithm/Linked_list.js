// 연결 리스트

// 리스트(Array)와 비슷하게 데이터의 연속적인 형태로 나태지만, 연결리스트는 포인터(Pinter)를 이용하여 구현을 한다.

// 차이
// 메모리 차이 - 배열을 연속적으로 저장, 연결리스트는 부분적으로 나눠서 저장이되어 구현시 다음 node의 위치를 저장시켜주어 연결시켜 활용한다.
// 시간복잡도 차이 - Array은 n번째 index의 값을 확인하기위해서는 O(1)이고, 연결리스트는 index로 접근이 불가하여 O(n) 을 나타낸다.
//               Array의 n번째에 데이터를 추가 및 삭제할때는 Array는 O(n)이고, 연결리스트는 O(1)을 나타내어 빠르게 처리할 수 있다.

// =====================================================================
// Singly Linked-list

// 리스트 형태로 구현하기 위해 (데이터 항목, 다음 데이터 위치를 나타내는 포인트 항목)을 사용하여 연결리스트를 구현한다.
class SinglyNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
        // optional size,
        // 마지막 node 위치를 등록하는 state가 있다면 O(n)이 아닌 O(1)시간 복잡도를 가질 수 있다.
    }

    // add
    add(data) {
        // 이 상태의 add 시간복잡도는 O(n)의 시간복잡도를 가진다.
        let node = this.head;

        while (node.next) {
            node = node.next;
        }

        node.next(data);
    }
}

const pointer1 = new SinglyNode(1);
// SinglyNode { data: 1, next: null }
const pointer2 = new SinglyNode(2);
// SinglyNode { data: 2, next: null }

pointer1.next = pointer2;
// 리스트와 같이 연속성 형태를 나타낼 수 있도록 연결시켜준다.

const linkedList = new LinkedList(pointer1);
// LinkedList {
//     head: SinglyNode { data: 1, next: SinglyNode { data: 2, next: null } }
//   }

// =====================================================================
// Doubly Linked-list
class DoublyNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
        // 양방향 연결리스트는 전노드 위치를 나타내는 항목이 추가된다.
    }

    add(data) {
        let node = this.head;

        if (!node) {
            this.head = data;
        } else {
            while (node.next) {
                node = node.next;
            }
            node.next = data;
            data.prev = node;
            // singly Linked-list와 다른 전 노드 위치를 나타내는 prev state을 추가한다
        }
    }
}
