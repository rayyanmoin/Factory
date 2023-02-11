import { Deploy as DeployEvent } from "../generated/Factory/Factory"
import { Deploy } from "../generated/schema"

export function handleDeploy(event: DeployEvent): void {
  let entity = new Deploy(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenAddress = event.params.tokenAddress
  entity.factoryContract = event.params.factoryContract

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
