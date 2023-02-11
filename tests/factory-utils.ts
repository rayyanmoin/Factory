import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { Deploy } from "../generated/Factory/Factory"

export function createDeployEvent(
  tokenAddress: Address,
  factoryContract: Address
): Deploy {
  let deployEvent = changetype<Deploy>(newMockEvent())

  deployEvent.parameters = new Array()

  deployEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )
  deployEvent.parameters.push(
    new ethereum.EventParam(
      "factoryContract",
      ethereum.Value.fromAddress(factoryContract)
    )
  )

  return deployEvent
}
