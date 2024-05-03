import React from 'react'
import { Button, Table, TableColumnsType } from 'antd'

type Member = {
	key: React.Key
	id: number
	name: string
	age: number
}

type User = {
	key: React.Key
	id: number
	userType: string
	checkCompleteYn: 'Y' | 'N'
}

function GridExample() {
	const expandedRowRender = () => {
		const columns: TableColumnsType<User> = [
			{ title: 'ID', dataIndex: 'id', key: 'id' },
			{ title: '유형', dataIndex: 'userType', key: 'userType' },
			{ title: '검진 완료 여부', dataIndex: 'checkCompleteYn', key: 'checkCompleteYn' },
		]
		const data: User[] = []
		for (let i = 1; i < 5; i++) {
			data.push({
				key: i.toString(),
				id: i,
				userType: 'B2BO',
				checkCompleteYn: 'Y',
			})
		}

		return <Table columns={columns} dataSource={data} pagination={false} />
	}

	const parentColumns: TableColumnsType<Member> = [
		{
			title: 'ID',
			dataIndex: 'id',
			key: 'id',
			render: (value, record) => {
				console.log('record>>', record)
				return <Button>{value}</Button>
			},
		},
		{ title: '이름', dataIndex: 'name', key: 'name' },
		{ title: '나이', dataIndex: 'age', key: 'age' },
	]

	const parentData: Member[] = []
	for (let i = 1; i < 3; i++) {
		parentData.push({
			key: i.toString(),
			id: i,
			name: `임승환${i}`,
			age: 20 + i,
		})
	}

	return (
		<Table
			size='small'
			dataSource={parentData}
			columns={parentColumns}
			bordered
			expandable={{
				expandedRowRender,
			}}
		/>
	)
}

export default GridExample
