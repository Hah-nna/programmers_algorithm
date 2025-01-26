class Solution {
    fun solution(numbers: IntArray): Int {
        numbers.sort()
        return numbers[numbers.size - 1] * numbers[numbers.size - 2]
    }
    /**
    * sort() : mutable, 원본 리스트를 변형시켜 정렬시킴  
    * sorted() : immutable, 원본리스트를 변형시키지 않고 정렬된 새로운 리스트 리텉ㄴ
    * sortedBy(), sortBy()
sortBy()는 리스트 요소가 1 개의 데이터 타입으로 이루어지지 않고, 내부에 여러 객체를 갖고 있는 타입일 때, 어떤 객체를 비교해서 정렬할 지 결정할 때 사용

sortedBy() : Immutable List에서 사용 -> sorted()와 마찬가지로 정렬된 새로운 리스트를 반환
sortBy() : Mutable List에서 사용 -> Mutable List에 사용 -> sort()와 마찬가지로 자기자신을 정렬


    */
}