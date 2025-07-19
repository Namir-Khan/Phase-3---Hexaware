import React from 'react'
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
  Button,
} from 'semantic-ui-react'
 
const SCard = ({id, name, category, price, image, remove, update}) => (
  <Card>
    <Image src={image} wrapped ui={false} />
    <CardContent>
      <CardHeader>{id}</CardHeader>
      <CardDescription>
        {name}
      </CardDescription>
    </CardContent>
    <CardContent extra>
    <Button color='red' onClick={() => remove(id)}> <Icon name='trash' /> Remove </Button>
    </CardContent>
  </Card>
)
 
export default SCard